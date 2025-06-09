import TechnologiesStack from "./TechnologiesStack"

const TechnologiesSection = () => {
  return (
    <section id="technologies" className="bg-base-100 min-h-[93vh]">
        <div className="container mx-auto py-4">
            <h2 className="text-3xl font-bold my-4">Technologies</h2>
            <div className="flex flex-col gap-4 py-4">
              <TechnologiesStack />
            </div>
        </div>
    </section>
  )
}

export default TechnologiesSection