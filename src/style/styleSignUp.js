import React from 'react';
import styled from 'styled-components';
import colors from '../style/colors';

const { dark, red, gray } = colors;
const Sign = styled.section`
     @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    @fontface {
        font-family: 'Poppins', san-serif;
        src: url('https://fonts.googleapis.com/css2?family=Poppins&display=swap')
    }
    background: ${dark};
    display: flex;
    height: 100vh;

    & * {
        font-family: 'Poppins', sans-serif;
    }

    img {
        width: 50%;
        fill: ${red};
        background: ${red};
    }
    form {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h1{
            color: ${gray};
            font-size: 36px;
            margin: 0;
        }
        input, button{
            padding: 8px;
            margin-top: 20px;
            width: 340px;
            font-family: 'Poppins',sans-serif;
            border-radius: 4px;
            border: 0;
            font-size: 14px;
            height: 40px;
        }
        button{
            background:${red};
            font-family: 'Poppins',sans-serif;
            color: white;
            cursor: pointer;
            font-size: 17px;
            height: 45px;
        }
    }
`

export {
    Sign
}