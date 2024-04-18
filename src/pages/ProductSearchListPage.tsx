// path: "/search/:word"

import { useNavigate, useParams } from 'react-router-dom';
import { FlexContainer, StyledHeading } from '../styles/CommonStyle';
import ProductCardList from '../components/card/ProductCardList';
import { getLimitAndSkipSearchedProducts } from '../utils/dataFetch';
import IProduct from '../interfaces/IProduct';

export default function ProductSearchListPage() {
    const { word } = useParams();
    const navigate = useNavigate();

    if (!word) {
        alert('올바르지 않은 검색입니다.');
        navigate('/');
        return <></>;
    }

    return (
        <FlexContainer>
            <StyledHeading>배컴몰 검색: {word}</StyledHeading>
            <ProductCardList
                fetchFunction={(limit: number, skip: number, select?: (keyof IProduct)[]) =>
                    getLimitAndSkipSearchedProducts(limit, skip, word, select)
                }
            />
        </FlexContainer>
    );
}
