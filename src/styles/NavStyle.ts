import styled from 'styled-components';
import { StyledButton } from './CommonStyle';

export const Logo = styled.p`
    font-size: ${({ theme }) => theme.fontSize.xxxl};
    color: white;
    font-weight: bold;
`;

export const StyledNav = styled.nav`
    padding: 15px 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.color.sky};
    align-items: center;

    @media ${({ theme }) => theme.windowSize.md} {
        flex-direction: column;
        gap: 20px;
        padding: 15px 5px;
    }
`;

export const StyledSearchForm = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: end;
    gap: 10px;
    align-items: center;

    @media ${({ theme }) => theme.windowSize.md} {
        gap: 5px;
    }
`;

export const SearchInput = styled.input`
    padding: 0 10px;
    width: 250px;
    border: 1px solid ${({ theme }) => theme.color.bg};
    border-radius: 5px;
    height: 35px;
    font-size: ${({ theme }) => theme.fontSize.lg};
`;

export const SearchButton = styled(StyledButton)`
    padding: 0 15px;
    border-radius: 5px;
    height: 35px;
    border: 1px solid black;
    font-size: ${({ theme }) => theme.fontSize.md};
    color: black;

    &:hover {
        border: 1px solid ${({ theme }) => theme.color.blue};
    }
`;
