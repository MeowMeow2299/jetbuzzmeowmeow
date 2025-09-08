import { BrowserRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Container from './components/Container';
import Slider from './components/Slider';
import './App.css';
import Marquee from './components/Marquee';
import Dom from './components/Dom';
import Footer from './components/Footer';
import Sliderx from './components/Sliderx';
import Sliderxx from './components/Sliderxx';
import Sliderxxx from './components/Sliderxxx';

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div >
          <Navbar
            onLoginClick={() => console.log('Login clicked')}
            onSignupClick={() => console.log('Signup clicked')}
          />
         
        </div>
        <Container />        
      </div>
      <div><Marquee /></div>
      <div><Slider /></div>
      <div><Dom /></div>
       <div><Sliderx /></div>
        <div><Sliderxx /></div>
        <div><Sliderxxx /></div>
      <div><Footer /></div>
      
    </BrowserRouter>
  );
}

export default App;
