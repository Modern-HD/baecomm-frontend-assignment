import styled, { keyframes } from 'styled-components';

export const loading = keyframes`
    0%{
        background-color: rgb(230 230 230);
    }
    
    35% {
        background-color: rgb(225 225 225);
    }

    70%{
        background-color: rgb(215 215 215);
    }
    
    100%{
        background-color: rgb(230 230 230);
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
