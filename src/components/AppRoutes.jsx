import { Routes, Route } from 'react-router-dom';

import Casino from '../pages/Casino';
import Slots from '../pages/Slots';
import Promotion from '../pages/Promotion';
import Contact from '../pages/Contact';

// Import new game pages
import HotGamesPage from '../pages/HotGamesPage';
import FavoritesPage from '../pages/FavoritesPage';
import SlotsPage from '../pages/SlotsPage';
import FishPage from '../pages/FishPage';
import LivePage from '../pages/LivePage';
import PokerGamesPage from '../pages/PokerGamesPage';
import SportsPage from '../pages/SportsPage';
import LotteryPage from '../pages/LotteryPage';
import ESportsPage from '../pages/ESportsPage';

// Import blog pages
import BlogJeetBuzzBangladesh from '../pages/BlogJeetBuzzBangladesh';
import BlogJeetBuzzPremierCasino from '../pages/BlogJeetBuzzPremierCasino';
import BlogOutline from '../pages/BlogOutline';

const AppRoutes = () => (
  <Routes>
    <Route path="/promotion" element={<Promotion />} />
    <Route path="/casino" element={<Casino />} />
    <Route path="/slots" element={<Slots />} />
    <Route path="/contact" element={<Contact />} />
    
    {/* New game pages */}
    <Route path="/hot-games" element={<HotGamesPage />} />
    <Route path="/favorites" element={<FavoritesPage />} />
    <Route path="/slots-games" element={<SlotsPage />} />
    <Route path="/fish-games" element={<FishPage />} />
    <Route path="/live-games" element={<LivePage />} />
    <Route path="/poker-games" element={<PokerGamesPage />} />
    <Route path="/sports-games" element={<SportsPage />} />
    <Route path="/lottery" element={<LotteryPage />} />
    <Route path="/esports" element={<ESportsPage />} />
    
    {/* Blog pages */}
    <Route path="/blog/jeetbuzz-bangladesh" element={<BlogJeetBuzzBangladesh />} />
    <Route path="/blog/jeetbuzz-premier-casino-platform" element={<BlogJeetBuzzPremierCasino />} />
    <Route path="/blog/blog-outline" element={<BlogOutline />} />
  </Routes>
);

export default AppRoutes;


