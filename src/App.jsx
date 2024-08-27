import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { NeoTalkLP } from './pages/NeoTalkLP'
import { Interviews } from './pages/Interviews'
import './styles/global.scss'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<NeoTalkLP />} /> 
          <Route path='/entrevistas' element={<Interviews />} /> 
        </Routes>
      </Router>
    </>
  )
}

export default App
