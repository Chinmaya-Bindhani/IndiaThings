import { Routes, Route } from 'react-router-dom'
import MainLayout from './mainlayout'
import Login from './authpages/login'
import Register from './authpages/register'

function App() {
  return (
    <Routes>
      {/* pages WITH navbar */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<div>Home page</div>} />
      </Route>

      {/* pages WITHOUT navbar */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default App