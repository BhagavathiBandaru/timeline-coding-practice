// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectTimelineCardData} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectTimelineCardData

  return (
    <div className="projectTimelineCard-container">
      <img src={imageUrl} alt="project" className="project-img" />
      <div className="title-duration-container">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar color="#171f46" />

          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a className="visit" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
