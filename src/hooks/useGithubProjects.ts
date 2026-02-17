import { useState, useEffect } from 'react';
import projectOverrides from '../data/projects';

export interface Project {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  link?: string | null;
  stars?: number;
  language?: string;
  topics?: string[];
  category?: string;
}

export const useGithubProjects = (username: string) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=stars&direction=desc&per_page=40`);
        if (!response.ok) throw new Error('Failed to fetch repositories');
        const data = await response.json();
        
        // Filter out forks and the profile README repo
        const filtered = data
          .filter((repo: any) => !repo.fork && repo.name.toLowerCase() !== username.toLowerCase())
          .map((repo: any) => {
            // Scoring system to prioritize web development projects
            let score = 0;
            const webKeywords = ['web', 'react', 'nextjs', 'next-js', 'frontend', 'backend', 'fullstack', 'tailwind', 'css', 'html', 'javascript', 'typescript', 'api'];
            const repoTopics = (repo.topics || []).map((t: string) => t.toLowerCase());
            
            // Check topics
            webKeywords.forEach(keyword => {
              if (repoTopics.includes(keyword) || repo.name.toLowerCase().includes(keyword)) {
                score += 10;
              }
            });

            // Check languages
            const webLanguages = ['TypeScript', 'JavaScript', 'HTML', 'CSS'];
            if (webLanguages.includes(repo.language)) {
              score += 5;
            }

            // Include stars in score but with lower weight than "web" relevance
            score += (repo.stargazers_count * 0.1);

            const override = projectOverrides[repo.name];
            
            // Categories
            let category = "Software";
            
            if (repoTopics.includes('react') || repoTopics.includes('web') || webLanguages.includes(repo.language)) {
              category = "Web Application";
            } else if (repoTopics.includes('api') || repoTopics.includes('backend')) {
              category = "API & Middleware";
            } else if (repoTopics.includes('library') || repoTopics.includes('package')) {
              category = "Development Library";
            }

            // Image Selection Logic
            let image = override?.image;
            if (!image) {
                // Return to GitHub OpenGraph images
                image = `https://opengraph.githubassets.com/1/${username}/${repo.name}`;
            }

            return {
              title: override?.title || repo.name.split('-').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
              description: override?.description || repo.description || 'A fascinating project in development.',
              image: image,
              githubLink: repo.html_url,
              link: repo.homepage,
              stars: repo.stargazers_count,
              language: repo.language,
              topics: repo.topics || [],
              category: category,
              score: score
            };
          })
          .sort((a: any, b: any) => b.score - a.score) // Sort by our custom relevance score
          .slice(0, 6); // Show top 6

        setProjects(filtered);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  return { projects, loading, error };
};
