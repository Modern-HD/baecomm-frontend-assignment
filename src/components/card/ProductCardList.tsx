import { useCallback, useEffect, useState } from 'react';
import IProduct from '../../interfaces/IProduct';
import IProductList from '../../interfaces/IProductList';
import { CardRoot } from '../../styles/CardStyle';
import IStatus from '../../interfaces/IStatus';
import ProductCard from './ProductCard';
import ProductLoadingCard from './ProductLoadingCard';
import MoreButton from '../button/MoreButton';

interface Props {
    fetchFunction: (limit: number, skip: number) => Promise<IProductList | undefined>;
}

export default function ProductCardList({ fetchFunction }: Props) {
    const [isLoading, setLoading] = useState<boolean>(true);
    const [status, setStatus] = useState<IStatus>({
        limit: 10,
        current: 0,
        total: 0,
    });
    const [productList, setProductList] = useState<IProduct[] | undefined>();

    const getData = useCallback(() => {
        setLoading(true);
        if (status.current !== 0 && status.current >= status.total) {
            return alert('마지막 페이지입니다.');
        }

        fetchFunction(status.limit, status.current).then(result => {
            if (!result) {
                setLoading(false);
                return setProductList([]);
            }
            const { products, ...others } = result;
            setStatus({
                limit: others.limit,
                current: others.skip + products.length,
                total: others.total,
            });
            const oldArr = productList instanceof Array ? productList : [];
            setProductList([...oldArr, ...products]);
            setLoading(false);
        });
    }, [status, productList, fetchFunction]);

    useEffect(() => {
        if (productList) return;
        getData();
    }, [productList, getData]);

    return (
        <>
            <CardRoot>
                {productList && productList.length === 0 && <div>검색 결과가 없습니다.</div>}
                {productList &&
                    productList.length > 0 &&
                    productList.map((el, i) => <ProductCard product={el} key={i} />)}
                {isLoading && [...Array(10)].map((_, i) => <ProductLoadingCard key={i} />)}
            </CardRoot>
            {!isLoading && status.current < status.total && <MoreButton action={getData} />}
            {status.current >= status.total && <div>마지막 페이지입니다.</div>}
        </>
    );
}
