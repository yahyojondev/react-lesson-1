import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero.js';
import About from './components/about/About';
import Service from './components/service/Service';
import Box from './components/box/Box.js';
import Article from './components/article/Article.js';
import Contact from './components/contact/Contact.js';


function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
<About/>
<Service/>
<Box/>
<Article/>
<Contact/>
    </>
  );
}
export default App;
