// Write your code here

import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseTimelineCardData} = props
  const {courseTitle, description, duration, tagsList} = courseTimelineCardData

  return (
    <div className="course-card-container">
      <div className="heading-duration">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle color="#171f46" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>

      <div className="items-container">
        {tagsList.map(eachListItem => (
          <ul className="each-element">
            <li className="item-block" key={eachListItem.id}>
              {eachListItem.name}
            </li>
          </ul>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
