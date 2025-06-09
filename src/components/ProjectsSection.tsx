import ProjectsList from "./ProjectsList"

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-base-200 min-h-[93vh]">
        <div className="container mx-auto py-4">
            <h2 className="text-3xl font-bold my-4">Projects</h2>
            <div className="flex flex-col gap-4 py-4">
                <ProjectsList />
            </div>
        </div>
    </section>
  )
}

export default ProjectsSection