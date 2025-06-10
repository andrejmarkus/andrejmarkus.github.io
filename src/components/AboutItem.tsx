const AboutItem = ({ title, content }: { title: string, content: string[] }) => {
  return (
    <div>
        <h3 className="text-2xl font-semibold">{title}</h3>
        {content.map((item) => (
            <p key={item} className="text-md my-2">{item}</p>
        ))}
    </div>
  )
}

export default AboutItem