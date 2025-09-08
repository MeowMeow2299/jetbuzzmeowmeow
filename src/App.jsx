import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Casino from './pages/Casino';
import Slots from './pages/Slots';
import ComingSoon from './pages/ComingSoon';

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout" style={{ display: 'flex' }}>
        <Sidebar />
        <div className="content-area" style={{ flex: 1, width: '100%' }}>
          <Navbar
            onLoginClick={() => console.log('Login clicked')}
            onSignupClick={() => console.log('Signup clicked')}
          />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/casino" element={<Casino />} />
              <Route path="/slots" element={<Slots />} />
              <Route path="*" element={<ComingSoon />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
