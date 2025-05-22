import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import LoginPage from "./components/login/Login"
import SignupPage from "./components/sign-up/SignupPage"
import CustomerSignupPage from "./components/sign-up/CustomerSignupPage"
import FundiSignupPage from "./components/sign-up/FundiSignupPage"
import ProfessionalSignupPage from "./components/sign-up/ProfessionalSignupPage"
import ContractorSignupPage from "./components/sign-up/ContractorSignupPage"
import HardwareSignupPage from "./components/sign-up/HardwareSignupPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/signup/customer" element={<CustomerSignupPage />} />
      <Route path="/signup/fundi" element={<FundiSignupPage />} />
      <Route path="/signup/professional" element={<ProfessionalSignupPage />} />
      <Route path="/signup/contractor" element={<ContractorSignupPage />} />
      <Route path="/signup/hardware" element={<HardwareSignupPage />} />
    </Routes>
  )
}

export default App
