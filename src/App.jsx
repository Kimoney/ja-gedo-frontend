import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import AdminDashboard from "./components/dashboard/AdminDashboard"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admindashboard" element={<AdminDashboard />} />
    </Routes>
  )
}

export default App