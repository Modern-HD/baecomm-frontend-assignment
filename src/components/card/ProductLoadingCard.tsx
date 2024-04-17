import { Card, ImageRoot, PriceText, TitleColumn } from '../../styles/CardStyle';
import { LoadingImg, LoadingText } from '../../styles/LoadingStyle';

export default function ProductLoadingCard() {
    return (
        <Card>
            <TitleColumn>
                <LoadingText />
                <LoadingText />
            </TitleColumn>
            <ImageRoot>
                <LoadingImg />
            </ImageRoot>
            <PriceText>
                <LoadingText $width={30} />
            </PriceText>
        </Card>
    );
}
