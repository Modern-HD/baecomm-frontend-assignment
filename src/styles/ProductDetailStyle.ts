import styled from 'styled-components';
import { StyledHeading } from './CommonStyle';

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5%;

    @media ${({ theme }) => theme.windowSize.xl} {
        flex-direction: column;
        align-items: center;
    }
`;

export const InfoTextRoot = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const InfoText = styled.p<{ $bold?: boolean }>`
    font-weight: ${props => (props.$bold ? 'bold' : 'normal')};
    font-size: ${({ theme }) => theme.fontSize.xl};
`;

export const MoreImageText = styled(StyledHeading)`
    margin-bottom: 0px;
`;

export const MoreImageRoot = styled.div`
    padding: 100px 10% 0 10%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items: center;
`;

export const MoreImage = styled.img`
    display: block;
    width: 100%;
    pointer-events: none;
`;

export const ThumbnailImage = styled.img`
    width: 400px;
    height: 400px;
    pointer-events: none;
    object-fit: cover;

    @media ${({ theme }) => theme.windowSize.xl} {
        width: 350px;
        height: 350px;
        margin-bottom: 10px;
    }
    @media ${({ theme }) => theme.windowSize.sm} {
        width: 300px;
        height: 300px;
        margin-bottom: 10px;
    }
`;
