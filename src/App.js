import './App.css';
import { ComponentStyled, Button, PreviousNext } from './styled';
import { useState } from 'react';



function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="App">

      <PreviousNext onClick={() => setCount(count - 1)} texto="Anterior" />

      <PreviousNext onClick={() => setCount(count + 1)} texto="Siguiente" />

      <ComponentStyled isActive={count === 1} texto="Nuestro héroe estaba flotando por el espacio sideral cuando a lo lejos divisó una nave espacial." />

      <ComponentStyled isActive={count === 2} texto="Sentía curiosidad por el interior de la nave y se puso a inspeccionarla. Llegó a una sala con dos puestas." />

      <ComponentStyled isActive={count === 3} texto="El héroe decidió atravesar la puerta que lo llevaba a casa." />
      <div>
        <ComponentStyled isActive={count >= 4} texto="Mientras tanto, otros héroes no tuvieron tanta suerte en su elección..." />

      </div>

    </div>
  );
};

export default App;
