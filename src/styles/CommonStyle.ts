import styled from 'styled-components';

export const Background = styled.div`
    padding: 100px 0;
    background-color: ${props => props.theme.color.bg};
`;

export const FlexContainer = styled(Background)<{ $direction?: 'row' | 'column' }>`
    display: flex;
    flex-direction: ${props => props.$direction || 'column'};
    justify-content: center;
    align-items: center;
`;
