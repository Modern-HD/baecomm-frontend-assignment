// path: "/detail/:id"

import { FlexContainer, PaddingContainer } from '../styles/CommonStyle';
import { useEffect, useRef, useState } from 'react';
import IProduct from '../interfaces/IProduct';
import { useNavigate, useParams } from 'react-router-dom';
import { getSingleProduct } from '../utils/dataFetch';
import ProductInfo from '../components/detail/ProductInfo';
import ProductLoading from '../components/detail/ProductLoading';

export default function ProductDetailPage() {
    const { id } = useParams();

    const navigate = useNavigate();
    const isLoadingRef = useRef(false); // 중복 통신 방지 용
    const [isLoading, setLoading] = useState(false); // UI 용
    const [product, setProduct] = useState<IProduct | undefined>();

    useEffect(() => {
        if (product || isLoadingRef.current) {
            return;
        }
        isLoadingRef.current = true;
        setLoading(true);
        if (!id) {
            alert('잘못된 품목입니다.');
            return navigate('/', { replace: true });
        }
        getSingleProduct(parseInt(id)).then(result => {
            if (!result) {
                alert('해당 품목이 존재하지 않습니다.');
                return navigate('/', { replace: true });
            }
            setProduct(result);
            setLoading(false);
            isLoadingRef.current = false;
        });
    }, [product, isLoading, id, navigate]);

    return (
        <FlexContainer>
            <PaddingContainer>
                {product && <ProductInfo product={product} />}
                {!product && <ProductLoading />}
            </PaddingContainer>
        </FlexContainer>
    );
}
