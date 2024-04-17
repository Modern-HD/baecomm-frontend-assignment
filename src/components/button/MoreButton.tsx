import styled from 'styled-components';

interface Props {
    action: () => void;
}

export default function MoreButton({ action }: Props) {
    return <StyledButton onClick={action}>더보기</StyledButton>;
}

const StyledButton = styled.button``;
