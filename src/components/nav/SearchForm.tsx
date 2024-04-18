import { useLocation, useNavigate } from 'react-router-dom';
import { SearchButton, SearchInput, StyledSearchForm } from '../../styles/NavStyle';
import { useRef } from 'react';

export default function SearchForm() {
    const location = useLocation();
    const navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement>(null);
    const word = location.pathname.split('/').at(-1) || '';
    return (
        <StyledSearchForm
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                if (!(inputRef.current instanceof HTMLInputElement)) {
                    return;
                }
                if (!inputRef.current.value) {
                    if (location.pathname === '/') {
                        return alert('검색어를 입력해주세요.');
                    }
                    return navigate(`/`);
                }
                return navigate(`/search/${inputRef.current.value}`);
            }}
        >
            <SearchInput placeholder="여기에서 검색" ref={inputRef} defaultValue={word} />
            <SearchButton type="submit">검색</SearchButton>
        </StyledSearchForm>
    );
}
