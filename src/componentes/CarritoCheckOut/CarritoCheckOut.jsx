import { NavLink } from "react-router-dom";
import "./CarritoCheckOut.css"
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import ItemCarrito from "../ItemCarrito/itemCarrito";

function CarritoCheckOut() {

    const { carrito, cantidadEnCarrito, total } = useContext(CarritoContext)

    return (
        <>
            <div className="carrito_lleno">
                {carrito.map((item) => <ItemCarrito key={item.id} item={item} />)}

            </div>
            {
                cantidadEnCarrito() === 5 || cantidadEnCarrito() === 7 || cantidadEnCarrito() === 10
                    ?
                    <div className="total">
                        <p className="total_p">Total promoción: ${total()}</p>
                    </div>
                    :
                    <div className="total">
                        <p className="total_p">Total a pagar: ${total()}</p>
                    </div>
            }

        </>
    )
}

export default CarritoCheckOut;