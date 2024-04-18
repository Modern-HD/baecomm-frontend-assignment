import { useNavigate } from 'react-router-dom';
import { StyledButton } from '../../styles/CommonStyle';
import styled from 'styled-components';

interface Props {
    text: string;
}

export default function BackButton({ text }: Props) {
    const navigate = useNavigate();
    return (
        <StyledBackButton
            onClick={() => {
                navigate(-1);
            }}
        >
            {text}
        </StyledBackButton>
    );
}

const StyledBackButton = styled(StyledButton)`
    padding: 5px 10px;
    font-size: ${({ theme }) => theme.fontSize.lg};
`;
