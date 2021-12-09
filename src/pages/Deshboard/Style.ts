import styled from 'styled-components';
import {shade} from 'polished';

export const Title = styled.h3`
    font-size:48px;
    color: #7017b0;
    line-height: 56px;

    margin-top: 80px;
`;

export const Form = styled.form`
    margin-top:40px;
    max-width:700px;

    display: flex;

    input {
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;
    }

    button {
        width: 210px;
        height: 70px;
        background: #04D361;
        border-radius: 0 5px 5px 0;
        border: 0;
        color: #000;
        font-weight: bold;

        transition: background-color 0.2s;

        &:hover{
            background: ${shade(0.2, "#04D361")};
        }
    }
`;

export const Repositories = styled.div`
    margin-top: 80px;
    max-width: 700px;


    a {
        background: #fff;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: block;
        text-decoration: none;

        display: flex;
        align-items: center;

        transition: transform 0.2s;

        &:hover {
            transform: translate(10px);
        }

        & + a {
            margin-top: 16px;
        }

        img{
            width: 64px;
            heigth: 65px;
            border-radius: 50%;
        }

        div{
            margin: 0 16px;
            flex: 1;

            strong{
                font-size: 20px;
                color: #3d3d4d;
            }

            p{
                font=size: 18px;
                color: #a8a8d3;
                margin-top: 4px;
            }
        }

        & + &{
            margin-top: 16px;

        }
    }


`;

export const Error = styled.span`
    display: block;
    color: #c53030;
    margin-top: 8px;
`;
