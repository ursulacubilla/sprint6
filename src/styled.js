import styled from "styled-components";
import Component from "./components/escena/escena";

export const ComponentStyled = styled(Component)`
width: 90%;
height: 35px;
border: 1px solid black;
border-radius: 50px;
background-color: white;
font-size: 20px;
margin-bottom: 10px;
background: ${props => props.isActive ? "Salmon" : "white"};
`;

export const PreviousNext = styled(ComponentStyled)`
width: 45%;
background-color: LightSalmon;
border-radius: 0;
`;