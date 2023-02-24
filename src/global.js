import { createGlobalStyle } from "styled-components";


const Global = createGlobalStyle`
 
 *{
    padding:0;
    margin:0;
    box-sizing:border-box;
    list-style-type:none;
    outline:none;
    border:none;
    font-family: 'Karla', sans-serif;
 }

 :root {
    --Dark-Violet:hsl(256, 26%, 20%);
    --Grayish-Blue:hsl(216, 30%, 68%);
    
    --Very-Dark-Violet: hsl(270, 9%, 17%);
    --Dark-Grayish-Violet: hsl(273, 4%, 51%);
    --Very-Light-Gray: hsl(0, 0%, 98%);
}
 `;

export default Global