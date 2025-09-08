import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Casino from './pages/Casino';
import Slots from './pages/Slots';
import ComingSoon from './pages/ComingSoon';
import GameChicken from './pages/GameChicken';
import LiveCasino from './pages/LiveCasino';
import Lottery from './pages/Lottery';
import ESport from './pages/ESport';
import TableGames from './pages/TableGames';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProtectedRoute from './components/ProtectedRoute';

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
              <Route path="/casino" element={<ProtectedRoute><Casino /></ProtectedRoute>} />
              <Route path="/slots" element={<ProtectedRoute><Slots /></ProtectedRoute>} />
              <Route path="/gamechicken" element={<ProtectedRoute><GameChicken /></ProtectedRoute>} />
              <Route path="/live-casino" element={<ProtectedRoute><LiveCasino /></ProtectedRoute>} />
              <Route path="/lottery" element={<ProtectedRoute><Lottery /></ProtectedRoute>} />
              <Route path="/e-sports" element={<ProtectedRoute><ESport /></ProtectedRoute>} />
              <Route path="/table-games" element={<ProtectedRoute><TableGames /></ProtectedRoute>} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
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
