import { Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/register'
import Home from './pages/home'
import GlaucoSwin from './pages/glaucoSwin'
import Abus from './pages/abus'
import BTSwin from './pages/btswin'
import ASCD from './pages/ascd'
import AngioCor from './pages/angioCor'
import FractureCheck from './pages/fractureCheck'
import AlzDetect from './pages/AlzDetect'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/AngioCor" element={<AngioCor />} />
      <Route path="/GlaucoSwin" element={<GlaucoSwin />} />
      <Route path="/BTSwin" element={<BTSwin />} />
      <Route path="/ABUS" element={<Abus />} />
      <Route path="/ASCD" element={<ASCD />} />
      <Route path="/FractureCheck" element={<FractureCheck />} />
      <Route path="/AlzDetect" element={<AlzDetect />} />
    </Routes>
  )
}

export default App
