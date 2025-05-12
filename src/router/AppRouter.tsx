import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CotizarPage from '../views/cotizar/cotizar.page';
import PlanesPage from '../views/planes/planes.page';
import MainLayout from '../layouts/MainLayout';

const AppRouter = () => {
  return (
    <MainLayout>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CotizarPage />} />
        <Route path="/planes" element={<PlanesPage />} />
        {/* puedes agregar una página 404 luego */}
      </Routes>
    </BrowserRouter>
    </MainLayout>
  );
};

export default AppRouter;
