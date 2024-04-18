import styled from 'styled-components';
import { StyledButton } from '../../styles/CommonStyle';

interface Props {
    action: () => void;
}

export default function MoreButton({ action }: Props) {
    return <StyledMoreButton onClick={action}>더보기</StyledMoreButton>;
}

const StyledMoreButton = styled(StyledButton)`
    margin-top: 50px;
    width: 50%;
    height: 50px;
    color: ${({ theme }) => theme.color.blue};
    font-size: ${({ theme }) => theme.fontSize.xl};
`;
