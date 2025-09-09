import { Routes, Route } from 'react-router-dom';

import Casino from '../pages/Casino';
import Slots from '../pages/Slots';

const AppRoutes = () => (
  <Routes>
    
    <Route path="/casino" element={<Casino />} />
    <Route path="/slots" element={<Slots />} />
  </Routes>
);

export default AppRoutes;


