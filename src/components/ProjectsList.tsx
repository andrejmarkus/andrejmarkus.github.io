import projects from "../data/projects"
import ProjectItem from "./ProjectItem"

const ProjectsList = () => {
  return (
    <>
      {projects.map((project) => (
        <ProjectItem
          key={project.title}
          title={project.title}
          description={project.description}
          image={project.image}
          githubLink={project.githubLink}
          link={project.link}
        />
      ))}
    </>
  )
}

export default ProjectsList