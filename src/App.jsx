import { Routes, Route } from "react-router-dom";
import Login from "./Login/Login.jsx";
import Signup from "./Register/Register.jsx";
import Dashboard from './Dashboard/Dashboard.jsx'
import Profile from './Dashboard/Profile/Profile.jsx'
import Add from './Dashboard/addCard/addCard.jsx'
function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path='/profil' element={<Profile/>}/>
        <Route path='/add' element={<Add/>}/>
    </Routes>
  );
}

export default App;