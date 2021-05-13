import { useEffect } from 'react'
import ReactJson from 'react-json-view'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './features/counter/counterSlice'

import Calendar from './components/Calendar'
import { DOTS1 } from './utils'

import './App.scss'

const App = () => {
  const global = useSelector((state) => state.global)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(global)
  }, [global])

  return (
    <div className='App'>
      <div className='calendar-grid'>
        <Calendar />
      </div>

      <div className='json-view-grid'>
        <div className='json-view'>
          {global.selectedDot.data && (
            <ReactJson
              src={global.selectedDot}
              collapsed={true}
              displayDataTypes={false}
            />
          )}
        </div>
      </div>

      <div className='meta-data-grid'>MetaData</div>
    </div>
  )
}

export default App
