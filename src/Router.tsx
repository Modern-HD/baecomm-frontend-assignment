import { Route, Routes, useLocation } from 'react-router-dom';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductSearchListPage from './pages/ProductSearchListPage';
import { useEffect } from 'react';

export default function Router() {
    const { pathname } = useLocation();

    useEffect(() => {
        const page = pathname.split('/')[1];
        if (page === 'detail') {
            window.scrollTo(0, 0);
        }
        if (!title.has(page)) {
            document.title = '배컴몰 - 메인';
            return;
        }
        document.title = title.get(page) as string;
    }, [pathname]);

    return (
        <Routes>
            <Route path="/" element={<ProductListPage />} />
            <Route path="/search/:word" element={<ProductSearchListPage />} />
            <Route path="/detail/:id" element={<ProductDetailPage />} />
        </Routes>
    );
}

const title = new Map<string, string>([
    ['search', '배컴몰 - 검색'],
    ['detail', '배컴몰 - 상세'],
]);
