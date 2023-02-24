import styled from 'styled-components'
import nav from '../assets/images/bg-pattern-mobile-nav.svg'

export const Nav = styled.nav``;
export const Container = styled.div`

        position: absolute;
        /* transform:translateY(-1000px); */
        top:80px;
        bottom:0;
        left:0;
        right:0;
        background-color: hsl(270, 9%, 17%); 

        
        transition:all 10s ease-out;
        
        background-repeat:no-repeat;
        background-position: bottom left;
        background-size:100%;
        background-image:url("${nav}");
        background-size:100%;
        display: flex;
        flex-direction:column;
        padding:4rem 0 0 0;
        gap:3rem;
        z-index:100;
        box-shadow: 0px 0px 20px 2px #2bbb;

> svg{
    color:hsl(256, 26%, 20%);
}

.menu-btn{
        display:flex;
        align-items:center;
        justify-content:center;
        border:none;
        background-color:transparent;
        cursor: pointer;
    }

    img{
        width:32px;
        position: absolute;
        transform:translateX(0);
        transition:transform .5s;
        top:-56px;
        bottom:0;
        right:16px;

    }
    ul{
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
        gap:3rem;

    }

    li{
        text-transform:uppercase;
        color:hsl(0, 0%, 98%);
        font-size:1.5rem;
        gap:3rem;
    }
    li:hover{
        color:hsl(273, 4%, 51%);
    }

    li button{
        color:hsl(0, 0%, 98%);
        border:solid hsl(0, 0%, 98%);
        font-size:1.3rem;
        padding:1rem 6rem;
        text-transform:uppercase;
        background-color:transparent;
    }
    li button:hover{  
    background-color:var(--Very-Light-Gray);
    color:var(--Very-Dark-Violet);
    transition:all .3s;
   
}

`;