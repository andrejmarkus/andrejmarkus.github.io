import { LuExternalLink, LuGithub } from "react-icons/lu"

const ProjectItem = ({title, description, image, githubLink, link}: { title: string, description: string, image: string, githubLink: string, link?: string | null }) => {
  return (
    <div className="project-card card bg-base-100 shadow-xl">
        <figure>
        <img src={image} alt={title} className="w-full h-64 object-cover" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <div className="card-actions justify-end">
                {link && (
                <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    <LuExternalLink /> View Project
                </a>
                )}
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    <LuGithub /> View on GitHub
                </a>
            </div>
        </div>
    </div>
  )
}

export default ProjectItem