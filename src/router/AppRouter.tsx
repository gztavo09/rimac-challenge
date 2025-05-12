import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CotizarPage from '../views/cotizar/cotizar.page';
import PlanesPage from '../views/planes/planes.page';
import MainLayout from '../layouts/MainLayout';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<CotizarPage />} />
          <Route path="/planes" element={<PlanesPage />} />
          {/*  agregar una página 404 luego */}
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default AppRouter;
