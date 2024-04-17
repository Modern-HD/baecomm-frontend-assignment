// path: "/search/:word"

import { useParams } from 'react-router-dom';
import { FlexContainer } from '../styles/CommonStyle';
import ProductCardList from '../components/card/ProductCardList';
import { getLimitAndSkipSearchedProducts } from '../utils/dataFetch';

export default function ProductSearchListPage() {
    const { word } = useParams();
    if (!word) return <></>;
    return (
        <FlexContainer>
            <ProductCardList
                fetchFunction={(limit: number, skip: number) =>
                    getLimitAndSkipSearchedProducts(limit, skip, word)
                }
            />
        </FlexContainer>
    );
}
