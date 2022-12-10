import { TextField } from '@mui/material';
import styled from 'styled-components';

export const H1 = styled.h1`
    text-align: center;
    margin-top: 80px;
    & + button {
        position: absolute;
        top: 20px;
        right: 20px;
    }
`;

export const Wrapper = styled.div`
    width: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    & > div {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
    }
`;

export const StyledTextField = styled(TextField)`
    width: 70%;
    & + button {
    }
`;
