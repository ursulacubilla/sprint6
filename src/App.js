// import logo from './logo.svg';
import './App.css';
// import Component from './components/escena/escena';
import { Button } from './styled';

function App() {
  return (
    <div className="App">

      <Button param1={"Nuestro héroe estaba flotando por el espacio sideral cuando a lo lejos divisó una nave espacial."} />

      <Button param2={"Sentía curiosidad por el interior de la nave y se puso a inspeccionarla. Llegó a una sala con dos puestas."} />

      <Button param3={"El héroe decidió atravesar la puerta que lo llevaba a casa."} />

      <Button param4={"Mientras tanto, otros héroes no tuvieron tanta suerte en su elección..."} />

    </div>
  );
};

export default App;
