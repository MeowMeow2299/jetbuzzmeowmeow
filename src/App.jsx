import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import FirebaseErrorHandler from './components/FirebaseErrorHandler';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Casino from './pages/Casino';
import Slots from './pages/Slots';
import Promotion from './pages/Promotion';
import ComingSoon from './pages/ComingSoon';
import GameChicken from './pages/GameChicken';
import LiveCasino from './pages/LiveCasino';
import Lottery from './pages/Lottery';
import ESport from './pages/ESport';
import TableGames from './pages/TableGames';
import Login from './pages/Login';
import Signup from './pages/Signup';
import BGD33 from './pages/BGD33';
import JeetBuzz from './pages/JeetBuzz';
import JeetBuzzGame from './pages/JeetBuzzGame';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <FirebaseErrorHandler />
      <div className="app-layout" style={{ display: 'flex' }}>
        <Sidebar />
        <div className="content-area" style={{ flex: 1, width: '100%' }}>
          <Navbar
            onLoginClick={() => console.log('Login clicked')}
            onSignupClick={() => console.log('Signup clicked')}
          />
          <Banner />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/promotion" element={<Promotion />} />
              <Route path="/casino" element={<Casino />} />
              <Route path="/slots" element={<Slots />} />
              <Route path="/gamechicken" element={<GameChicken />} />
              <Route path="/live-casino" element={<LiveCasino />} />
              <Route path="/lottery" element={<Lottery />} />
              <Route path="/e-sports" element={<ESport />} />
              <Route path="/table-games" element={<TableGames />} />
              <Route path="/sports" element={<ComingSoon />} />
              <Route path="/popular" element={<ComingSoon />} />
              <Route path="/bgd33" element={<BGD33 />} />
              <Route path="/jeetbuzz" element={<JeetBuzz />} />
              <Route path="/jeetbuzz-game" element={<JeetBuzzGame />} />
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
