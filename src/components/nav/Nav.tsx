import { Link, useLocation } from 'react-router-dom';
import { Logo, StyledNav } from '../../styles/NavStyle';
import BackButton from '../button/BackButton';
import SearchForm from './SearchForm';

export default function Nav() {
    const location = useLocation();
    return (
        <StyledNav>
            <Link to={'/'}>
                <Logo>배컴몰</Logo>
            </Link>

            {(location.pathname === '/' || location.pathname.startsWith('/search/')) && (
                <SearchForm />
            )}
            {location.pathname.startsWith('/detail/') && <BackButton text={'목록으로 돌아가기'} />}
        </StyledNav>
    );
}
