import './App.scss'
import ReactJson from 'react-json-view'

import Calendar from './components/Calendar'
import { DOTS1 } from './utils'

const App = () => {
  return (
    <div className='App'>
      <Calendar />
      <div className='json-view'>
        <ReactJson src={DOTS1} collapsed={true} />
      </div>
    </div>
  )
}

export default App
