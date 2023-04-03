import React, { useState } from 'react';
// import { useRef } from 'react';


const Component = (props) => ( 
    <button className={props.className} onClick={props.onClick}>
        {props.texto}
    </button>
);


export default Component;


