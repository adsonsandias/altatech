import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Homer } from '../Pages/Home';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homer />} />
      </Routes>
    </BrowserRouter>
  );
}
