import styled from 'styled-components';

export const InputContainer = styled.div`
    margin-bottom: 20px;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 24px;
    font-family: 'Roboto';
    grid-column: 1/-1;

    input {
        width: 100%;
        height: 75px;
        background-color: #E0FFFF;
        border: 0;
        padding: 0 15px;

        font-size: 24px;
        font-family: 'Roboto';

        color: #000000;
    }
`