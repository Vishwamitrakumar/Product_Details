
import './App.css'
import Navigation from './Navigation/Navigation'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import FetchingData from './Datafetch/FetchingData';
function App() {
  return (
    <div className='app'>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FetchingData" element={<FetchingData />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
