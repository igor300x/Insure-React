import styled from 'styled-components'
import How from './assets/images/bg-pattern-how-we-work-desktop.svg';
import foo from './assets/images/bg-pattern-footer-desktop.svg'
import foom from './assets/images/bg-pattern-footer-mobile.svg'
import mob from './assets/images/bg-pattern-how-we-work-mobile.svg'
import nav from './assets/images/bg-pattern-mobile-nav.svg'


export const Body = styled.div`
:root {
    --Dark-Violet:hsl(256, 26%, 20%);
    --Grayish-Blue:hsl(216, 30%, 68%);
    
    --Very-Dark-Violet: hsl(270, 9%, 17%);
    --Dark-Grayish-Violet: hsl(273, 4%, 51%);
    --Very-Light-Gray: hsl(0, 0%, 98%);
}

@media (max-width:2560px) {
    .menu-btn{display:none;}
}

@media (max-width:600px) {
}

`;
export const Header = styled.header`
background-color:var(--Very-Light-Gray);
`;

export const Nav = styled.nav`
height:80px;
display:flex;
align-items:center;
justify-content:center;
width:100%;

@media (max-width:1200px) {.nav-container{padding-inline:1rem;}}

@media (max-width:600px) {
    

     .nav-links{ 
        position: absolute;
        transform:translateY(-1000px);
        top:80px;
        bottom:0;
        left:0;
        right:0;
        background-color:var(--Very-Dark-Violet);
        background-repeat:no-repeat;
        background-position: bottom left;
        background-size:100%;
        background-image:url("${nav}");
        display: flex;
        flex-direction:column;
        padding:4rem 0 0 0;
        gap:3rem;
        z-index:100;
    }

    .active{
        transform:translateX(0);
        transition:transform .3s;
    }
    .nav-link{
        color:hsl(0, 0%, 98%);
        font-size:1.5rem;
    }
    .nav-link:hover{
        color:hsl(0, 0%, 98%);
    }

    .nav-link button{
        color:hsl(0, 0%, 98%);
        border-color:hsl(0, 0%, 98%);
        font-size:1.3rem;
        padding:1rem 6rem;
    }
    .menu-btn{
        display:flex;
        align-items:center;
        justify-content:center;
        border:none;
        background-color:transparent;
        cursor: pointer;
    }
}

.nav-container{
    width:100%;
    max-width:1200px;
    display:flex;
    align-items:center;
    justify-content:space-between;
}
.nav-links{
    display:flex;
    align-items:center;
    gap: 1.5rem;
}
.nav-link{
   text-transform:uppercase;
   font-size:16px;
   color:var(--Dark-Grayish-Violet);
   font-weight:700;
   cursor: pointer;
}
.nav-link:hover{
    color:var(--Very-Dark-Violet);
    transition:color .3s;
}
.nav-link button {
    text-transform:uppercase;
    padding:.5rem 1.5rem;
    background-color:transparent;
    border:2px solid var(--Very-Dark-Violet);
    font-weight:700;
    cursor: pointer;
}
.nav-link button:hover{
    background-color:var(--Very-Dark-Violet);
    color:var(--Very-Light-Gray);
    transition:all .3s;
}

`;

export const Main = styled.main`
@media (max-width:600px) {
    text-align:center;
}

`;

export const Maincontainer = styled.div`

@media (max-width:1200px) {.work-container{
        margin:0 2rem;} }

@media (max-width:600px) {

    .work-container{
        margin-inline:2rem;
        flex-direction:column;
        gap:2rem;
        text-align:center;
        background-image:url("${mob}");
        box-shadow:none;
    }
    .work-container h1{font-size:3rem;} 
}

.work-section{
    margin:7rem 0;
}
.work-container{
    max-width:1200px;
    margin:0 auto;
    background-color:hsl(256, 26%, 20%);
    padding:3rem;
    display:flex;
    align-items:center;
    justify-content:space-between;
    background-image:url("${How}"); 
    background-repeat:no-repeat;
    background-position: top right;
    box-shadow: 2px 5px 8px 5px #3d474b;
}
   .work-container h1{
    font-size:3.7rem;
    color: var(--Very-Light-Gray);
    font-family: bolder;
    }
    .work-container button{
        padding: .8rem 2rem;
        text-transform:uppercase;
        border: 1px solid var(--Very-Light-Gray);
        color:var(--Very-Light-Gray);
        background-color:transparent;
        cursor: pointer;
        font-weight:700;
        z-index: 101;
    }
    .work-container button:hover{
        transition:all .3s;
        color: var(--Very-Dark-Violet);
        background-color :var(--Very-Light-Gray);


    }
`;

export const Landing = styled.div`

background-color:hsl(256, 26%, 20%);
height:600px;
position:relative;
display:flex;
align-items:center;
justify-content:center;

@media (max-width:1200px) {.landing-container{padding-inline:2rem;}
    .landing-container .landing-img{position: inherit;}
    .landing-img img{position: inherit;}}

@media (max-width:600px) {
    height:auto;

    .ds{display: none;}
    .landing-img img{
         width:100%; 
         bottom:0rem;
         position: relative;
         top: -7rem;
    }
    .landing-container{
        flex-direction:column-reverse;
        padding-inline: 0px;
        gap:-10rem;
    }
    .landing-container .content{
        display:flex;
        align-items:center;
        justify-content:center;
        text-align:center;
        padding: 21rem 1rem 5rem 1rem ;
        position: relative;
    }
    .container-left{
        display:block;
        position: absolute;
        top:0;
        left:0;
    }
    .container-right{
        display:block;
        position: absolute;
        bottom:0;
        right:0;
    }
    .landing-container .title{
        text-align:center;
        font-size:30px;
    }
    .landing-container .title::before{display:none;}

}
.intro-right{
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
}
.intro-left{
    position: absolute;
    bottom: -50%;
    left: 0;
}
.landing-container{
    display:flex;
    align-items:center;
    gap:10rem;
    width:100%;
    max-width:1200px;
    margin: auto auto;
}
.landing-container .title{
    font-family: bolder;
    font-size:3rem;
    line-height:50px;
    color:var(--Very-Light-Gray);
}
.landing-container .title::before{
    content:"";
    margin-bottom: 3rem;
    width:150px;
    height:2px;
    display:block;
    background-color:var(--Very-Light-Gray);
}
.landing-container .content{
    display:flex;
    align-items:flex-start;
    flex-direction:column;
    gap:2rem;
}
.landing-container .info{ color:var(--Very-Light-Gray);}
.landing-container .plan-btn{
    padding:.8rem 2rem;
    text-transform:uppercase;
    border:1px solid var(--Very-Light-Gray);
    color:var(--Very-Light-Gray);
    background-color:transparent;
    font-weight:700;
    z-index:101;
    cursor: pointer;
}

.plan-btn:hover{
    transition:all .3s;
    color:var(--Very-Dark-Violet);
    background-color:var(--Very-Light-Gray);
}
.landing-container .landing-img{
    position: relative;
    bottom:-7rem;
    left:0;
    width:100%;
}
.landing-img img{
    position: absolute;
    bottom:-20rem;
    left:0px;
    width:100%;
    box-shadow: 0px 0px 20px 4px #3d474b;
}

.mb{
    max-width:600px;
    display:none;
}

`;

export const Howsection = styled.div`
margin:6rem 0;

@media (max-width:1200px) { .how-container{padding:0rem 2rem;}}

@media (max-width:600px) {
    
    .how-container{
        padding-inline:2rem;
        align-items:center;
        justify-content:center;
    }
    .how-container .title{
        display:flex;
        flex-direction:column;
        align-items:center;
    }
    .row{
        display:flex;
        flex-direction:column;
    }
    .card{
        display:flex;
        align-items:center;
        justify-content:center;
        text-align:center;
    }
}

.how-container{
    max-width:1200px;
    margin:0 auto;
    display:flex;
    flex-direction:column;
    gap:4rem;
}

.how-container .title{
    font-size:3.7rem;
    font-family: bolder;
}
.how-container .title::before{
    content:"";
    margin-bottom:2rem;
    width:150px;
    height:2px;
    display:block;
    background-color:var(--Dark-Grayish-Violet);
}
.row{
    display:flex;
    gap: 2rem;
}
.card{
    flex-direction:column;
    
    gap: 2rem;
}
.card img{
    display:flex;
    align-items:flex-start;
    padding: 2rem;
}

.card-content{
    display:flex;
    flex-direction:column;
    gap:1rem;
}
.card-content .card-title{
    font-size:1.5rem;
    font-family: bolder;
}
.card-content .card-info{
    line-height:1.5rem;
    color: hsl(273, 4%, 51%);
}

`;

export const Footer = styled.footer`

   background-color :var(--Very-Light-Gray);
   background-image:url("${foo}");
   background-repeat:no-repeat;
   background-position: top left;

   .attribution{
    font-size: 15px;
    text-align: center;
    border:solid hsl(256, 26%, 20%);
    border-radius:15px;
    width:30%;
    max-width:768px;
    text-transform:uppercase;
    padding:.7rem 1.3rem;
    background-color:transparent;
    font-weight:700;
    margin-inline:auto;
    cursor: pointer;
    box-shadow: 0px 0px 20px 4px #3d474b;
    margin-bottom:8px;
   }
   .attribution:hover{
    background-color:var(--Very-Dark-Violet);
    color:var(--Very-Light-Gray);
    transition:all .7s;
    border:solid hsl(228, 45%, 44%);
    box-shadow: 0px 0px 20px 4px #2bbb;
}
   .attribution a{
    color: hsl(228, 45%, 44%);
    text-decoration:none;
}

   @media (max-width:600px) {
    background-image:url("${foom}");

    .attribution{
        width:70%;
        margin-bottom:0;
     }

    .socials{
        flex-direction:column;
        gap:2rem;
        padding-inline:2rem;
    }
}

@media (max-width:1200px) 

      { padding:5rem 2rem}

.footer-container{
    max-width:1200px;
    margin:0 auto;
    padding:5rem 0;
    display: flex;
    flex-direction:column;
    gap:2rem;
}
.socials{
    display:flex;
    align-items:center;
    justify-content:space-between;
}
.socials div{
    display:flex;
    gap:1rem;
}
.socials img{cursor: pointer;}

.socials div img:hover{filter:brightness(0);}

`;

export const Links = styled.div`

    display:flex;
    align-items:flex-start;
    justify-content:space-between;

    @media (max-width:600px) {
        flex-direction:column;
        align-items:center;
        gap:3rem;
        text-align:center;
    }
   
    .column{
        display:flex;
        flex-direction:column;
        gap: 0.7rem;;
        text-transform:uppercase;
    }
    .column .column-title{
        margin-bottom:1rem;
        color: hsl(273, 4%, 51%);
    }
    .column p{
        font-weight:700;
        cursor: pointer;
    }
    .column p:hover{text-decoration:underline;}
    
`;


