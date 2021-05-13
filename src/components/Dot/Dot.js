import React from 'react'
import clsx from 'clsx'

import './Dot.scss'

const Dot = (props) => {
  const { dot } = props

  const getStatus = () => {
    if (!dot) return ''
    const { status } = dot
    if (status === -1) return 'red'
    if (status === 0) return 'yellow'
    if (status === 1) return 'green'
  }

  const onDotClick = () => {
    console.log(dot)
  }

  return (
    <div className='Dot' onClick={onDotClick}>
      <div className={clsx('content', getStatus())}></div>
    </div>
  )
}

export default Dot
