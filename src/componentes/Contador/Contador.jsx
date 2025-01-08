import { useState } from "react";
import "./Contador.css"


function Contador({stock, enCarrito}) {

    const [contador, setContador] = useState(1);

    function restar() {
        if (contador > 0) {
            setContador(contador - 1)
        }
    }

    function sumar() {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    function agregarCarrito(){
        enCarrito(contador)
    }

    function Stock(){
        if(stock===0){
             return "Sin unidades"
        }else{
            return contador
        }
    }


    return (
        <>
            <div className="contenedorContador">
                <div className="contador">
                    <button onClick={restar}>-</button>
                    <div>{Stock()}</div>
                    <button onClick={sumar}>+</button>
                </div>

                <button id="botonAgregarCarrito" disabled={contador===0 || contador>stock} onClick={agregarCarrito}>Agregar al carrito</button>
            </div>


        </>
    )
}

export default Contador;