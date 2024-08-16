import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { NeoTalkLP } from './pages/NeoTalkLP'
import './styles/global.scss'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<NeoTalkLP />} /> 
        </Routes>
      </Router>
    </>
  )
}

export default App
