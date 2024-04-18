import { useCallback, useEffect, useState } from 'react';
import IProduct from '../../interfaces/IProduct';
import IProductList from '../../interfaces/IProductList';
import { CardRoot, InfoText } from '../../styles/CardStyle';
import ProductCard from './ProductCard';
import ProductLoadingCard from './ProductLoadingCard';
import MoreButton from '../button/MoreButton';
import { useLocation, useParams } from 'react-router-dom';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { productListAtom, statusAtom } from '../../recoil/atom/productAtom';

type FetchFunction = <T extends keyof IProduct>(
    limit: number,
    skip: number,
    select?: T[]
) => Promise<IProductList<Pick<IProduct, T>> | undefined>;

interface Props {
    fetchFunction: FetchFunction;
}

export default function ProductCardList({ fetchFunction }: Props) {
    const location = useLocation();
    const { word } = useParams();
    const [isLoading, setLoading] = useState(false);
    const [status, setStatus] = useRecoilState(statusAtom);
    const [productList, setProductList] = useRecoilState(productListAtom);
    const statusReset = useResetRecoilState(statusAtom);
    const productListReset = useResetRecoilState(productListAtom);

    const getData = useCallback(() => {
        setLoading(true);
        if (status.current !== 0 && status.current >= status.total) {
            return alert('마지막 페이지입니다.');
        }
        fetchFunction(status.limit, status.current, [
            'id',
            'thumbnail',
            'brand',
            'title',
            'price',
        ]).then(result => {
            if (!result) {
                setLoading(false);
                return setProductList([]);
            }
            const { products, ...others } = result;
            setStatus({
                limit: others.limit,
                current: others.skip + products.length,
                total: others.total,
                word,
            });
            const oldArr = productList instanceof Array ? productList : [];
            setProductList([...oldArr, ...products]);
            setLoading(false);
        });
    }, [status, productList, word, fetchFunction, setProductList, setStatus]);

    useEffect(() => {
        if (word === status.word) return;
        statusReset();
        productListReset();
    }, [location, word, status, statusReset, productListReset]);

    useEffect(() => {
        if (productList || isLoading) return;
        getData();
    }, [productList, getData, isLoading, status, word]);

    return (
        <>
            {productList && productList.length === 0 && <InfoText>검색 결과가 없습니다.</InfoText>}
            <CardRoot>
                {productList &&
                    productList.length > 0 &&
                    productList.map((el, i) => <ProductCard product={el} key={i} />)}
                {isLoading && [...Array(10)].map((_, i) => <ProductLoadingCard key={i} />)}
            </CardRoot>
            {!isLoading && status.current < status.total && <MoreButton action={getData} />}
            {productList && productList.length > 0 && status.current >= status.total && (
                <InfoText>마지막 페이지입니다.</InfoText>
            )}
        </>
    );
}
