import styled from "styled-components";
import Backgroud from "../../Assets/backgrond1.svg";

export const Image = styled.img``;

export const Container = styled.div`
   background: url("${Backgroud}");
   background-size: cover;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 40px;

   min-
   height: 100vh;
`;

export const image = styled.img`
    
    margin-top: 40px;
`;

export const ContainerItens = styled.div`

border-radius: 61px 61px 0px 0px;
background: linear-gradient(157deg, rgba(255, 255, 255, 0.60) 0.84%, rgba(255, 255, 255, 0.60) 0.85%, rgba(255, 255, 255, 0.15) 100%);
padding: 50px 30px;
   display: flex;
   flex-direction: column;

   height: 100vh;
`;

export const H1 = styled.h1`
color:#ffffff;
text-align: center;
font-size: 34px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-bottom: 80px;

`

export const InputLabel = styled.p`

   letter-spacing: -0.40px;
   font-style: normal;
   font-weight: bold;
   font-size: 18px;
   line-height: 22px;
   color: #eeeeee;

   margin-left: 25px;
`

export const Input = styled.input`

border-radius: 14px;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
width: 342px;
height:  58px;
border: none;
outline: none;
padding-left: 25px;
margin-bottom: 34px;

color: #FFF;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

export const Button = styled.button`
width: 342px;
height: 74px;
border-radius: 14px;
background: var(--templates-5-color-1, rgba(0, 0, 0, 0.80));
border:none;
margin-top:130px;
font-style: normal;
font-weight: bold;
font-size: 17px;
line-height: 28px;
color:#ffffff;
cursor: pointer;

display: flex;
align-items: center;
justify-content: center;
gap: 20px;


&:hover{
   opacity: 0.8;
}

&:active{
   opacity: 0.5;
}

`;


