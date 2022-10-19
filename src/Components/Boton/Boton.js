import React from "react";
import "./Boton.css";

const Boton = (props) => {
  const esOperador = (valor) => {
    return isNaN(valor) && valor !== "." && valor !== "=";
  };

  return (
    <div
      className={`boton-contenedor ${
        esOperador(props.children) ? "operador" : " "}`.trimEnd()}>
      {props.children}
    </div>
  );
};

export default Boton;
