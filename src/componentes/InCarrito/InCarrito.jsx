import { NavLink } from "react-router-dom";
import "./InCarrito.css"
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import ItemCarrito from "../ItemCarrito/itemCarrito";



function InCarrito() {

    const { carrito, cantidadEnCarrito, limpiarCarrito, total } = useContext(CarritoContext)
    console.log("Carro: ", carrito)
    return (
        <>
            {
                cantidadEnCarrito() === 0

                    ?

                    <>
                        <div className="carrito_vacio">
                            <h1>El carrito está vacío...</h1>
                        </div>
                        <div id="img">
                            <img src="https://i.postimg.cc/HxsKh8z0/confunded.png" alt="" />
                        </div>
                        <div id="button">
                            <NavLink to={"/"}><button>Ir a Home</button></NavLink>
                        </div>
                    </>

                    :

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

                        <div className="contenedor_botones">
                            <div className="botones_carrito">
                                <button onClick={limpiarCarrito}>Limpiar el Carrito</button>
                                <NavLink to="/checkout"><button>Terminar compra</button></NavLink>
                            </div>
                        </div>
                        <hr />
                        
                    </>

            }

        </>

    )

}

export default InCarrito;