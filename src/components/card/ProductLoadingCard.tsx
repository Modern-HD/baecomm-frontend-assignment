import { Card, ImageRoot, PriceText, TitleColumn } from '../../styles/CardStyle';
import { LoadingImg, LoadingText } from '../../styles/LoadingStyle';

export default function ProductLoadingCard() {
    return (
        <Card>
            <ImageRoot>
                <LoadingImg />
            </ImageRoot>
            <TitleColumn>
                <LoadingText />
                <LoadingText />
            </TitleColumn>
            <PriceText>
                <LoadingText $width={30} />
            </PriceText>
        </Card>
    );
}
