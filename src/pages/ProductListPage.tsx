// path: "/"

import { FlexContainer, StyledHeading } from '../styles/CommonStyle';
import ProductCardList from '../components/card/ProductCardList';
import { getLimitAndSkipProducts } from '../utils/dataFetch';

export default function ProductListPage() {
    return (
        <FlexContainer>
            <StyledHeading>배컴몰에 오신 것을 환영합니다.</StyledHeading>
            <ProductCardList fetchFunction={getLimitAndSkipProducts} />
        </FlexContainer>
    );
}
