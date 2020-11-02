import styled, { css, keyframes } from 'styled-components';

export const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    text-align: center;
    color: white;
    border-radius: 10px;
    width: 350px;
    margin: 0 auto;
    height: 500px;
    margin-top: 100px;
    background-color: #3d3d3d;
    box-shadow: 5px 5px 5px grey;

    &>*{
        border: 0px solid transparent;
        width: 250px;
        margin: 0 auto;
        margin-top: 15px;
        margin-bottom: 5px;
        height: 30px;
        border-radius: 5px;
    }
    &>p:first-of-type{
        padding-bottom: 10px;
        border-bottom: 1px solid white;
        font-size: x-large;
        border-radius: 0;
    }
`;

export const FormButton = styled.button`
    margin-top: auto;
    margin-bottom: 40px;
    border-radius: 5px;
    background-color: white;
    height: 35px;
    border: 0px solid transparent;

    :hover{
        background-color: darkgray;
        color: white;
        cursor: pointer;
    }
`;

