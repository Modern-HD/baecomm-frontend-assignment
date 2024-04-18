import styled from 'styled-components';

export const CardRoot = styled.div`
    width: 100%;
    padding: 20px 10% 20px 10%;
    display: grid;
    column-gap: 30px;
    row-gap: 30px;
    grid-template-columns: 50% 50%;
    justify-items: center;
    @media ${({ theme }) => theme.windowSize.lg} {
        padding: 20px 5% 20px 5%;
        column-gap: 20px;
        row-gap: 20px;
    }
    @media ${({ theme }) => theme.windowSize.md} {
        column-gap: 10px;
    }
    @media ${({ theme }) => theme.windowSize.sm} {
        column-gap: 5px;
    }
`;

export const Card = styled.div`
    width: 400px;
    height: 400px;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    background-color: white;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    @media ${({ theme }) => theme.windowSize.xl} {
        width: 300px;
        height: 300px;
    }
    @media ${({ theme }) => theme.windowSize.lg} {
        width: 250px;
        height: 250px;
    }
    @media ${({ theme }) => theme.windowSize.md} {
        width: 180px;
        height: 180px;
    }
    @media ${({ theme }) => theme.windowSize.sm} {
        width: 150px;
        height: 150px;
    }
`;

export const TitleColumn = styled.div<{ $isOver?: boolean }>`
    padding: 0px 10px;
    height: 30px;
    transition: 0.3s;
    display: grid;
    align-items: center;
    grid-template-columns: 40% 59%;
    column-gap: 1%;
    color: ${props => (props.$isOver ? 'white' : 'black')};
    background-color: ${props => (props.$isOver ? props.theme.color.blue : 'white')};
`;

export const Text = styled.div`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-decoration: none;
`;

export const BrandText = styled(Text)`
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.lg};
`;

export const TitleText = styled(Text)`
    text-align: end;
    font-size: ${({ theme }) => theme.fontSize.md};
`;

export const ImageRoot = styled.div`
    flex: 1 1 0%;
    width: 100%;
    overflow: hidden;
    background-color: ${({ theme }) => theme.color.bg};
`;

export const ImageArea = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
`;

export const PriceText = styled(Text)`
    color: 'black';
    padding: 5px 10px;
    font-size: ${({ theme }) => theme.fontSize.lg};
`;

export const InfoText = styled.p`
    margin-top: 20px;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.xl};
`;
