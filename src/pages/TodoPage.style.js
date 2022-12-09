import { TextField } from '@mui/material';
import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 50%;
    /* display: flex;
    flex-flow: nowrap column; */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    & > div {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        /* gap: 10px; */
    }
`;

export const StyledTextField = styled(TextField)`
    width: 70%;
    & + button {
    }
`;
