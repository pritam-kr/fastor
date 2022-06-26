
import './App.css';
import { Routes, Route } from "react-router-dom"
import Register from './pages/register/Register';
import Otp from './pages/login/Otp';
import Image from './pages/Image/Image';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/otp/:mobileNumber" element={<Otp />} />
<Route path='/image' element={<Image />} />
      </Routes>
    </div>
  );
}

export default App;
