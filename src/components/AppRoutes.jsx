import { Routes, Route } from 'react-router-dom';

import Casino from '../pages/Casino';
import Slots from '../pages/Slots';
import Promotion from '../pages/Promotion';

const AppRoutes = () => (
  <Routes>
    <Route path="/promotion" element={<Promotion />} />
    <Route path="/casino" element={<Casino />} />
    <Route path="/slots" element={<Slots />} />
  </Routes>
);

export default AppRoutes;


