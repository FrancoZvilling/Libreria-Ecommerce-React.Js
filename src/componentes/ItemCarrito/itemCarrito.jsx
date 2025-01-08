import { useContext } from "react";
import "./ItemCarrito.css"
import { CarritoContext } from "../../context/CarritoContext";
import { FaTrash } from "react-icons/fa";

function ItemCarrito({item}){
    const {eliminarItem} = useContext(CarritoContext)
    return(
        <>
            
            <div className="item_carrito">
                <img src={item.img}/>
                <div className="item_datos">
                    <p id="titulo">{item.titulo}</p>
                    <div className="datos">
                        <p>Precio: ${item.precio}</p>
                        <p>Cantidad: {item.cantidad}</p>
                        <p>Subtotal: ${item.cantidad * item.precio}</p>
                        
                    </div>
                    <button onClick={()=>eliminarItem(item.id)}><FaTrash /></button>
                </div>
            </div>
        </>
    )
}

export default ItemCarrito;