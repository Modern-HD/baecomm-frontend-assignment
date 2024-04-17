import { useState } from 'react';
import IProduct from '../../interfaces/IProduct';
import {
    BrandText,
    Card,
    ImageArea,
    ImageRoot,
    PriceText,
    TitleColumn,
    TitleText,
} from '../../styles/CardStyle';
import { Link } from 'react-router-dom';

interface Props {
    product: IProduct;
}

export default function ProductCard({ product }: Props) {
    const [isMouseOver, setMouseOver] = useState(false);
    return (
        <Link to={`/detail/${product.id}`}>
            <Card
                onMouseOver={() => {
                    setMouseOver(true);
                }}
                onMouseOut={() => {
                    setMouseOver(false);
                }}
            >
                <TitleColumn $isOver={isMouseOver}>
                    <BrandText>{product.brand}</BrandText>
                    <TitleText>{product.title}</TitleText>
                </TitleColumn>
                <ImageRoot>
                    <ImageArea src={product.thumbnail} />
                </ImageRoot>
                <PriceText>${product.price}</PriceText>
            </Card>
        </Link>
    );
}
