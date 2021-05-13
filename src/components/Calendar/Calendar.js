import React, { useState, useEffect } from 'react'
import { datesGenerator } from 'dates-generator'
import clsx from 'clsx'
import './Calendar.scss'
import Day from '../Day'
import { DOTS1 } from '../../utils'

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [dates, setDates] = useState([])
  const [calendar, setCalendar] = useState({
    month: selectedDate.getMonth(),
    year: selectedDate.getFullYear(),
  })

  useEffect(() => {
    const body = {
      month: calendar.month,
      year: calendar.year,
    }
    console.log(body)
    const { dates, nextMonth, nextYear, previousMonth, previousYear } =
      datesGenerator(body)

    console.log({ dates, nextMonth, nextYear, previousMonth, previousYear })
    setDates([...dates])
    setCalendar({
      ...calendar,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear,
    })
  }, [])

  const isDayOutOfMonth = (weekLength, weekIndex, date) => {
    if (weekIndex === 0) {
      if (date >= 24) {
        return true
      }
    }
    if (weekIndex === weekLength - 1) {
      if (date <= 7) {
        return true
      }
    }
    return false
  }

  const onClickNext = () => {
    const body = { month: calendar.nextMonth, year: calendar.nextYear }
    const { dates, nextMonth, nextYear, previousMonth, previousYear } =
      datesGenerator(body)

    setDates([...dates])
    setCalendar({
      ...calendar,
      month: calendar.nextMonth,
      year: calendar.nextYear,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear,
    })
  }

  const onClickPrevious = () => {
    const body = { month: calendar.previousMonth, year: calendar.previousYear }
    const { dates, nextMonth, nextYear, previousMonth, previousYear } =
      datesGenerator(body)

    setDates([...dates])
    setCalendar({
      ...calendar,
      month: calendar.previousMonth,
      year: calendar.previousYear,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear,
    })
  }

  const onSelectDate = (date) => {
    setSelectedDate(new Date(date.year, date.month, date.date))
  }

  return (
    <div className='calendar-container'>
      <div className='month'>{MONTHS[calendar.month]}</div>

      <div>
        <table style={{ width: '100%' }}>
          <tbody>
            <tr>
              {DAYS.map((day) => (
                <td key={day} className='day-in-week'>
                  <div className='day-in-week-text'>{day}</div>
                </td>
              ))}
            </tr>

            {dates.length > 0 &&
              dates.map((week, weekIndex) => {
                return (
                  <tr key={JSON.stringify(week[0])} className='week'>
                    {week.map((each) => {
                      let dots = []
                      if (each.date === 5) {
                        dots = DOTS1
                      }
                      return (
                        <td
                          key={JSON.stringify(each)}
                          className={clsx(
                            'day',
                            isDayOutOfMonth(
                              dates.length,
                              weekIndex,
                              each.date
                            ) && 'day-blur'
                          )}
                        >
                          <Day day={each.date} dots={dots} />
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>

      <div className='control'>
        <button className='arrow' onClick={onClickPrevious}>
          <i class='bx bxs-left-arrow'></i>
        </button>

        <button className='arrow' onClick={onClickNext}>
          <i class='bx bxs-right-arrow'></i>
        </button>
      </div>
    </div>
  )
}

export default Calendar
