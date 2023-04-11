import React from 'react';

function Welcome(props) {

    return ( 
<div>

    <h1>Bienvenidos, hoy presentamos "El Héroe curioso". </h1>
    
    <p>Haz click en "Comenzar" para descubrir la historia...!!</p>

    <button onClick={() => props.onComenzar()}>
        Comenzar
    </button>

</div>
    );
};

export default Welcome;