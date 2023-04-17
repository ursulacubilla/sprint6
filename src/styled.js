import styled from "styled-components";
import Component from "./components/escena/escena";


export const ComponentStyled = styled(Component)`
width: 90%;
height: 45px;
border: 1px solid black;
border-radius: 50px;
font-size: 20px;
margin-bottom: 10px;
margin-top: 15px;
background: ${props => props.isActive ? "Salmon" : "rgba(248,252,254,0.5)"};
`;

export const PreviousNext = styled(ComponentStyled)`
width: 45%;
background-color: LightSalmon;
border-radius: 0;
`;

export const Div = styled.div`
background-image: url("${props => props.image}");
height: 100vh;
background-repeat: no-repeat;
background-size: cover;
background-position: center center;
`;