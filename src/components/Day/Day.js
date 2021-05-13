import React, { useEffect, useState } from 'react'
import Dot from '../Dot'

import './Day.scss'

const Day = (props) => {
  const { day, dots = [] } = props

  const [dotGroups, setDotGroups] = useState([])

  useEffect(() => {
    if (dots.length === 0) return

    const newDotGroups = []
    let newDotGroup = []
    dots.forEach((dot, index) => {
      if (index % (4 + 1) === 0) {
        newDotGroups.push(newDotGroup)
        newDotGroup = []
      } else {
        newDotGroup.push(dot)
      }
    })

    setDotGroups(newDotGroups)
  }, [dots])
  return (
    <div className='Day'>
      {dotGroups.map((group, index) => {
        return (
          <div className='dot-row'>
            {group.map((dot) => {
              return <Dot dot={dot} />
            })}
          </div>
        )
      })}
      <div className='day-text'>{day}</div>
    </div>
  )
}

export default Day
