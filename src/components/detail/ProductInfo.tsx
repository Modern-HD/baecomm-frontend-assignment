import IProduct from '../../interfaces/IProduct';
import {
    InfoContainer,
    InfoText,
    InfoTextRoot,
    MoreImage,
    MoreImageRoot,
    MoreImageText,
    ThumbnailImage,
} from '../../styles/ProductDetailStyle';

interface Props {
    product: IProduct;
}

export default function ProductInfo({ product }: Props) {
    return (
        <>
            <InfoContainer>
                <ThumbnailImage src={product.thumbnail} />
                <InfoContainer>
                    <InfoTextRoot>
                        <InfoText $bold={true}>{product.brand}</InfoText>
                        <InfoText $bold={true}>{product.title}</InfoText>
                        <InfoText>${product.price}</InfoText>
                        <InfoText>{product.description}</InfoText>
                    </InfoTextRoot>
                </InfoContainer>
            </InfoContainer>
            <MoreImageRoot>
                <MoreImageText>상품 이미지</MoreImageText>
                {product.images.map((el, i) => (
                    <MoreImage src={el} key={i} />
                ))}
            </MoreImageRoot>
        </>
    );
}
