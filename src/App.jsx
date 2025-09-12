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
import CK444 from './pages/CK444';
import BETBDT from './pages/BETBDT';
import Crickex from './pages/Crickex';
import TK999 from './pages/TK999';
import L444 from './pages/L444';
import PopularGame from './pages/PopularGame';
import CrickexLogin from './pages/CrickexLogin';
import CrickexBet from './pages/CrickexBet';
import CrickexApp from './pages/CrickexApp';
import CrickexOnline from './pages/CrickexOnline';
import CrickexAccountCreate from './pages/CrickexAccountCreate';
import CrickexBonus from './pages/CrickexBonus';
import CrickexBDLogin from './pages/CrickexBDLogin';
import CrickexBettingApp from './pages/CrickexBettingApp';
import CrickexBetBangla from './pages/CrickexBetBangla';
import JeetbuzzLogin from './pages/JeetbuzzLogin';
import JeetbuzzCasino from './pages/JeetbuzzCasino';
import JeetbuzzOnline from './pages/JeetbuzzOnline';
import JeetbuzzPartner from './pages/JeetbuzzPartner';
import Sports from './pages/Sports';
import ProtectedRoute from './components/ProtectedRoute';
import HotGamesPage from './pages/HotGamesPage';
import FavoritesPage from './pages/FavoritesPage';
import SlotsPage from './pages/SlotsPage';
import FishPage from './pages/FishPage';
import LivePage from './pages/LivePage';
import PokerGamesPage from './pages/PokerGamesPage';
import SportsPage from './pages/SportsPage';
import LotteryPage from './pages/LotteryPage';
import ESportsPage from './pages/ESportsPage';
import AboutUs from './pages/AboutUs';
import AntiMoneyLaundering from './pages/AntiMoneyLaundering';
import CashBackOffer from './pages/CashBackOffer';
import CookiePolicy from './pages/CookiePolicy';
import DisputeResolution from './pages/DisputeResolution';
import FairnessRNGTesting from './pages/FairnessRNGTesting';
import HelpCenterFAQ from './pages/HelpCenterFAQ';
import HowToPlaceBet from './pages/HowToPlaceBet';
import TermsOfService from './pages/TermsOfService';
import SearchResults from './pages/SearchResults';

function App() {
  return (
    <BrowserRouter>
      <FirebaseErrorHandler />
      <div className="app-layout">
        <Sidebar />
        <div className="content-area">
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
              <Route path="/popular" element={<PopularGame />} />
              <Route path="/hot-games" element={<HotGamesPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/slots-games" element={<SlotsPage />} />
              <Route path="/fish-games" element={<FishPage />} />
              <Route path="/live-games" element={<LivePage />} />
              <Route path="/poker-games" element={<PokerGamesPage />} />
              <Route path="/sports" element={<SportsPage />} />
              <Route path="/sports-games" element={<SportsPage />} />
              <Route path="/lottery" element={<LotteryPage />} />
              <Route path="/esports" element={<ESportsPage />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/anti-money-laundering" element={<AntiMoneyLaundering />} />
              <Route path="/cash-back-offer" element={<CashBackOffer />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="/dispute-resolution" element={<DisputeResolution />} />
              <Route path="/fairness-rng-testing" element={<FairnessRNGTesting />} />
              <Route path="/help-center-faq" element={<HelpCenterFAQ />} />
              <Route path="/how-to-place-bet" element={<HowToPlaceBet />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/search" element={<SearchResults />} />
            <Route path="/bgd33" element={<BGD33 />} />
            <Route path="/jeetbuzz" element={<JeetBuzz />} />
            <Route path="/jeetbuzz-game" element={<JeetBuzzGame />} />
            <Route path="/ck444" element={<CK444 />} />
            <Route path="/betbdt" element={<BETBDT />} />
            <Route path="/crickex" element={<Crickex />} />
            <Route path="/crickex-login" element={<CrickexLogin />} />
            <Route path="/crickex-bet" element={<CrickexBet />} />
            <Route path="/crickex-app" element={<CrickexApp />} />
            <Route path="/crickex-online" element={<CrickexOnline />} />
            <Route path="/crickex-account-create" element={<CrickexAccountCreate />} />
            <Route path="/crickex-bonus" element={<CrickexBonus />} />
            <Route path="/crickex-bd-login" element={<CrickexBDLogin />} />
            <Route path="/crickex-betting-app" element={<CrickexBettingApp />} />
            <Route path="/crickex-bet-bangla" element={<CrickexBetBangla />} />
            <Route path="/jeetbuzz-login" element={<JeetbuzzLogin />} />
            <Route path="/jeetbuzz-casino" element={<JeetbuzzCasino />} />
            <Route path="/jeetbuzz-online" element={<JeetbuzzOnline />} />
            <Route path="/jeetbuzz-partner" element={<JeetbuzzPartner />} />
            <Route path="/tk999" element={<TK999 />} />
            <Route path="/l444" element={<L444 />} />
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
