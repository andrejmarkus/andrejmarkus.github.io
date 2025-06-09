import technologies from '../data/technologies'
import TechnologiesItem from './TechnologiesItem'

const TechnologiesStack = () => {
  return (
    technologies.map((tech) => (
      <TechnologiesItem 
        key={tech.title}
        title={tech.title}
        items={tech.items}
    />
    )
  )
)}

export default TechnologiesStack