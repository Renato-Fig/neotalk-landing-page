import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { NeoTalkLP } from './pages/NeoTalkLP'
import './styles/global.scss'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/lp' element={<LandingPage />} /> 
          <Route path='/' element={<NeoTalkLP />} /> 
        </Routes>
      </Router>
    </>
  )
}

export default App
