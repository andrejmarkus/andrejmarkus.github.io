import { useGithubProjects } from "../hooks/useGithubProjects"
import ProjectItem from "./ProjectItem"

const ProjectsList = () => {
  const { projects, loading, error } = useGithubProjects("andrejmarkus");

  if (loading) {
    return (
      <div className="col-span-full py-20 flex flex-col items-center justify-center gap-4">
        <div className="h-12 w-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
        <p className="text-slate-400 font-medium animate-pulse">Fetching latest creations...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="col-span-full py-20 text-center">
        <p className="text-red-400 font-medium">Failed to load projects. Please try again later.</p>
      </div>
    );
  }

  return (
    <>
      {projects.map((project) => (
        <ProjectItem
          key={project.githubLink}
          title={project.title}
          description={project.description}
          image={project.image}
          githubLink={project.githubLink}
          link={project.link}
          stars={project.stars}
          language={project.language}
          topics={project.topics}
          category={project.category}
        />
      ))}
    </>
  )
}

export default ProjectsList