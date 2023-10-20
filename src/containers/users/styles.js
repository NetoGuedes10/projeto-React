import styled from "styled-components";
import Backgroud from "../../Assets/backgroud.svg";

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
backdrop-filter: column;
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

`;







export const Button = styled.button`
width: 342px;
height: 74px;
border-radius: 14px;
background: transparent;
border: 1px solid #ffffff;
margin-top: 120px;
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



img{
   transform: rotateY(180deg);
}
`;



export const User = styled.li`

     display: flex;
     justify-content: space-around;
     align-items: center;
     margin-top: 24px;
     border-radius: 14px;
      background: rgba(255, 255, 255, 0.25);
       box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
       width: 342px;
       height:  58px;
       border: none;
       outline: none;

       p{

         font-style: normal;
         font-weight: normal;
         font-size: 24px;
         line-height: 28px;

         color: #ffffff;

         button{
            background: none;
            border: none;
            cursor: pointer;
         }


       }
`