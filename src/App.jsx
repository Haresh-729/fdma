import { useEffect } from 'react'
import Landing from './Componenets/Landing';
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="w-screen scrollbar-hide overflow-hidden">
      <Landing/>
    </div>
  )
}

export default App
