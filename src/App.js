import { useState } from "react";
import "./App.css";
import Boton from "./Components/Boton/Boton";
import BotonClear from "./Components/BotonClear/BotonClear";
import Pantalla from "./Components/Pantalla/Pantalla";
import { evaluate } from "mathjs";
import Swal from "sweetalert2";

function App() {
  const [input, setInput] = useState("");

  const agregarInput = (val) => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      Swal.fire("Por favor ingresa un valor para realizar un cálculo");
    }
  };

  return (
    <div className="App">
      <div className="react-logo-contenedor">
      
        <img
          className="react-logo"
          src="logoReact.png"
          alt="logo de React para Calculadora"
        />
        <h1>React Calculator</h1>
      </div>

      <div className="contenedor-calculadora ">
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+ </Boton>
        </div>

        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>- </Boton>
        </div>

        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>* </Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={() => setInput(" ")}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
