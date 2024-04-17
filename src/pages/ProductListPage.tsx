// path: "/"

import { FlexContainer } from '../styles/CommonStyle';
import ProductCardList from '../components/card/ProductCardList';
import { getLimitAndSkipProducts } from '../utils/dataFetch';

export default function ProductListPage() {
    return (
        <FlexContainer>
            <ProductCardList fetchFunction={getLimitAndSkipProducts} />
        </FlexContainer>
    );
}
