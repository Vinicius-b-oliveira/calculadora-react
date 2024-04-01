import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #CACACA;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
`

export const Content = styled.div`
    background-color: #4F4F4F;
    width: 350px;
    height: 400px;
    padding: 30px;

    display: grid;
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;

    Button:nth-child(2) {
        background-color: #8B0000;
    }

    Button:nth-child(17) {
        grid-row: 5/7;
        grid-column: 4/5;
    }
`
