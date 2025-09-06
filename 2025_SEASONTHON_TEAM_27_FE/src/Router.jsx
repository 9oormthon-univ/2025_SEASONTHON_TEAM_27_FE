import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Archive from './pages/Archive';
import Mail from './pages/Mail'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/mail/:id" element={<Mail />} />
      </Routes>
    </BrowserRouter>
  );
}
