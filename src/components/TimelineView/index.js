// Write your code here

import {Chrono} from 'react-chrono'

import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimelineCardBlock = item => {
    if (item.categoryId === 'PROJECT') {
      return (
        <ProjectTimelineCard key={item.id} projectTimelineCardData={item} />
      )
    }
    return <CourseTimelineCard key={item.id} courseTimelineCardData={item} />
  }

  return (
    <div className="app-container">
      <div className="responsive-container">
        <div className="header-container">
          <h1 className="heading">
            MY JOURNEY OF <br />
            CCBP 4.0
          </h1>
        </div>
        <Chrono
          theme={{
            secondary: 'white',
          }}
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
        >
          {timelineItemsList.map(eachItem => renderTimelineCardBlock(eachItem))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
