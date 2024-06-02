import { useEffect } from 'react'
import Landing from './Componenets/Landing';
import Aos from "aos";
import "aos/dist/aos.css";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="w-screen scrollbar-hide overflow-hidden">
      <Routes>
      <Route path="/fdma" element={<Landing/>}/>
      </Routes>
    </div>
  )
}

export default App
