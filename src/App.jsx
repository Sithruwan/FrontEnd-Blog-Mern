import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'

const App = () => {
  return (
    <div className="">
      <NavBar/>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
          </Routes>
      <Footer/>
    </div>
  )
}

export default App