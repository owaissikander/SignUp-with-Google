import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from './pages/signin'
import Home from './pages/Home'
import Signup from './pages/signup'
import Header from './component/Header'
import Profile from './pages/Profile'
function App() {

  return (
    
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/profile' element={<Profile/>} />
        
      </Routes>
    </BrowserRouter>



  )
}

export default App
