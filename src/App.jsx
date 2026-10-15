import { Routes, Route } from 'react-router-dom'
import MainLayout from './mainlayout'
import Home from './home/home'
import Login from './authpages/login'
import Register from './authpages/register'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default App