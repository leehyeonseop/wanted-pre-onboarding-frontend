import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 50%;
    display: flex;
    flex-flow: nowrap column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const Form = styled.form`
    display: flex;
    flex-flow: nowrap column;
    gap: 30px;
    & + a {
        text-align: center;
        text-decoration: underline;
        margin-top: 10px;
        color: gray;
    }

    & + button {
        background-color: #fff;
        border: none;
        text-decoration: underline;
        color: gray;
        display: inline-block;
        cursor: pointer;
        margin-top: 20px;
    }
`;
