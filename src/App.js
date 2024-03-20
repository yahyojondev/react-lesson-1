import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero.js';
import About from './components/about/About';
import Service from './components/service/Service';
import Box from './components/box/Box.js';


function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
<About/>
<Service/>
<Box/>
    </>
  );
}
export default App;
