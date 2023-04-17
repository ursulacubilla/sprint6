import React from 'react';
import { ComponentStyled, Div, PreviousNext } from './styled';
import { useState } from 'react';
import images from './assets/images';


function Application() {

    const [count, setCount] = useState(0);
    
    return (
      <Div image={ count >= 1 && count <= 4 ? images[count - 1].img : ""}>
  
        <PreviousNext onClick={() => setCount(count - 1)} text="Anterior" />
  
        <PreviousNext onClick={() => setCount(count + 1)} text="Siguiente" />
  
        
        <ComponentStyled isActive={count === 1} text={images[0].txt} />
           
        <ComponentStyled isActive={count === 2} text={images[1].txt} />
  
        <ComponentStyled isActive={count === 3} text={images[2].txt} />
  
        <ComponentStyled isActive={count >= 4} text={images[3].txt}/>
  
      </Div>
    );
  };
  
  export default Application;