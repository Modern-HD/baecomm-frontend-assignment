import styled from 'styled-components';

export const Background = styled.div`
    padding: 50px 0 100px 0;
    background-color: ${props => props.theme.color.bg};
`;

export const FlexContainer = styled(Background)<{ $direction?: 'row' | 'column' }>`
    display: flex;
    flex-direction: ${props => props.$direction || 'column'};
    justify-content: center;
    align-items: center;
`;

export const PaddingContainer = styled.div`
    width: 100%;
    padding: 0 15%;
    @media ${({ theme }) => theme.windowSize.lg} {
        padding: 0 10%;
    }
    @media ${({ theme }) => theme.windowSize.md} {
        padding: 0 5%;
    }
`;

export const StyledButton = styled.button`
    border: 2px solid ${({ theme }) => theme.color.blue};
    border-radius: 5px;
    background-color: white;
    font-weight: 500;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
        color: white;
        background-color: ${({ theme }) => theme.color.blue};
    }
`;

export const StyledHeading = styled.h1`
    margin-bottom: 40px;
    font-size: ${({ theme }) => theme.fontSize.xxxl};
    font-weight: bold;

    @media ${({ theme }) => theme.windowSize.md} {
        font-size: ${({ theme }) => theme.fontSize.xxl};
    }
`;
