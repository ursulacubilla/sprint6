// import logo from './logo.svg';
import './App.css';
import Component, { makeThings } from './components/escena/escena';
import { ComponentStyled, Button, PreviousNext } from './styled';



function App() {
  return (
    <div className="App">

      <PreviousNext>"Anterior"</PreviousNext>

      <PreviousNext>"Siguiente"</PreviousNext>

      <Button>"Nuestro héroe estaba flotando por el espacio sideral cuando a lo lejos divisó una nave espacial."</Button>

      <Button>"Sentía curiosidad por el interior de la nave y se puso a inspeccionarla. Llegó a una sala con dos puestas."</Button>

      <Button>"El héroe decidió atravesar la puerta que lo llevaba a casa."</Button>
      <div>
        <Button>"Mientras tanto, otros héroes no tuvieron tanta suerte en su elección..."</Button>
      </div>

    </div>
  );
};

export default App;
