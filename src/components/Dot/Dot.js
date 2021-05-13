import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import clsx from 'clsx'

import { setSelectedDot } from '../../features/global/globalSlice'

import './Dot.scss'

const Dot = (props) => {
  const { dot } = props
  const global = useSelector((state) => state.global)
  const dispatch = useDispatch()
  const [isHover, setIsHover] = useState(false)

  const getStatus = () => {
    if (!dot) return ''
    const { status } = dot
    if (status === -1) return 'red'
    if (status === 0) return 'yellow'
    if (status === 1) return 'green'
  }

  const onDotClick = () => {
    console.log(dot)
    dispatch(setSelectedDot(dot))
  }

  const onMouseEnter = () => {
    setIsHover(true)
  }

  const onMouseLeave = () => {
    setIsHover(false)
  }

  return (
    <div
      className={clsx('Dot', isHover && 'dot-hover')}
      onClick={onDotClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={clsx('content', getStatus())}></div>
    </div>
  )
}

export default Dot
