import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Explore from './Pages/Explore';
import CheckIn from './Pages/CheckIn';
import Login from './Pages/Login';
import Registration from './Pages/Registration';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/check-in" element={<CheckIn />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
