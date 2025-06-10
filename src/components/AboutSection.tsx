import AboutList from "./AboutList"

const AboutSection = () => {
  
  return (
    <section id="about" className="bg-base-200 flex min-h-[93vh]">
      <div className="container flex-1 flex flex-col justify-center mx-auto py-4 md:px-0 px-4">
        <h2 className="text-3xl font-bold my-4">About Me</h2>
        <div className="flex flex-col xl:flex-row items-center gap-4">
          <div id="about-content" className="flex flex-col gap-4 py-4">
            <AboutList />
          </div>
          <img
            src="/conversation.svg"
            alt="conversation-illustration"
            className="max-w-lg xl:max-w-2xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

export default AboutSection