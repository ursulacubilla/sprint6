import React from 'react';

function Welcome(props) {
    
    return ( 
<div>

    <p>Bienvenidos....</p>

    <button onClick={() => props.onComenzar()}>
        Comenzar
    </button>

</div>
    );
};

export default Welcome;