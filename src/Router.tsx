import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductSearchPage from './pages/ProductSearchPage';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProductListPage />} />
                <Route path="/search/:word" element={<ProductSearchPage />} />
                <Route path="/detail/:id" element={<ProductDetailPage />} />
            </Routes>
        </BrowserRouter>
    );
}
