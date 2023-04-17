import React from 'react';

const Component = (props) => ( 
    <button className={props.className} onClick={props.onClick}>
        {props.text} 
    </button>
);

export default Component;


