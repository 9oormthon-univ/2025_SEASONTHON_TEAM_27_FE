import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Archive from './pages/Archive';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </BrowserRouter>
  );
}
