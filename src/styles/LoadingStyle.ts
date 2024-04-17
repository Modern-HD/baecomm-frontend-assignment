import styled, { keyframes } from 'styled-components';

export const loading = keyframes`
    0%{
        background-color: rgb(240 240 240);
    }
    
    35% {
        background-color: rgb(235 235 234);
    }

    70%{
        background-color: rgb(225 225 225);
    }
    
    100%{
        background-color: rgb(240 240 240);
    }
`;

export const LoadingText = styled.div<{ $width?: number }>`
    width: ${props => (props.$width === undefined ? 100 : props.$width)}%;
    height: 1rem;
    border-radius: 9999px;
    animation: ${loading} 1s linear infinite;
`;

export const LoadingImg = styled.div`
    width: 100%;
    height: 100%;
    animation: ${loading} 1s linear infinite;
`;
