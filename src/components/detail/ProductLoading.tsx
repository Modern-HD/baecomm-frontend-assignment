import styled from 'styled-components';
import { LoadingImg, LoadingText, loading } from '../../styles/LoadingStyle';
import {
    InfoContainer,
    InfoTextRoot,
    MoreImageRoot,
    MoreImageText,
    ThumbnailImage,
} from '../../styles/ProductDetailStyle';

export default function ProductLoading() {
    return (
        <>
            <InfoContainer>
                <LoadingThumbnailImage />
                <InfoLoadingTextRoot>
                    <LoadingText $width={30} />
                    <LoadingText $width={70} />
                    <LoadingText $width={20} />
                    <LoadingText />
                    <LoadingText />
                </InfoLoadingTextRoot>
            </InfoContainer>
            <MoreImageRoot>
                <MoreImageText>상품 이미지</MoreImageText>
                {[...Array(4)].map((_, i) => (
                    <InfoLoadingImg key={i} />
                ))}
            </MoreImageRoot>
        </>
    );
}

const LoadingThumbnailImage = styled(ThumbnailImage)`
    animation: ${loading} 1s linear infinite;
`;

const InfoLoadingTextRoot = styled(InfoTextRoot)`
    flex: 1 1 0%;
`;

const InfoLoadingImg = styled(LoadingImg)`
    height: 500px;
`;
