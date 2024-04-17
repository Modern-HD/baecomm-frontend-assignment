import { Route, Routes } from 'react-router-dom';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductSearchListPage from './pages/ProductSearchListPage';

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<ProductListPage />} />
            <Route path="/search/:word" element={<ProductSearchListPage />} />
            <Route path="/detail/:id" element={<ProductDetailPage />} />
        </Routes>
    );
}
