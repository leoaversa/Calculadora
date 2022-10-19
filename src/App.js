import { useState } from "react";
import "./App.css";
import Boton from "./Components/Boton/Boton";
import BotonClear from "./Components/BotonClear/BotonClear";
import Pantalla from "./Components/Pantalla/Pantalla";

function App() {
  const [input, setInput] = useState ( 'input');  

  const agregarInput = val => {
    setInput(val + input)
  } ;

  return (
    <div className="App">
      <div className="react-logo-contenedor">
        <img
          className="react-logo"
          src="logoReact.png"
          alt="logo de React para Calculadora"
        />
      </div>

      <div className="contenedor-calculadora ">
        <Pantalla input={input}/> 
        <div className="fila">
          <Boton>1</Boton>
          <Boton>2</Boton>
          <Boton>3</Boton>
          <Boton>+ </Boton>
        </div>

        <div className="fila">
        <Boton>4</Boton>
          <Boton>5</Boton>
          <Boton>6</Boton>
          <Boton>- </Boton>
          </div>

        <div className="fila">
        <Boton>7</Boton>
          <Boton>8</Boton>
          <Boton>9</Boton>
          <Boton>*  </Boton>
        </div>
        <div className="fila">
        <Boton>=</Boton>
          <Boton>0</Boton>
          <Boton>.</Boton>
          <Boton>/</Boton>
          </div>
        <div className="fila">
        <BotonClear>Clear</BotonClear>
          
          </div>
      </div>
    </div>
  );
}

export default App;
