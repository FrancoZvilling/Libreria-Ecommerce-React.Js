import { useState, useContext } from "react";
import Contador from "../Contador/Contador";
import { CarritoContext } from "../../context/CarritoContext";
import { useDarkMode } from "../../context/DarkMode";
import "./DetallesItem.css"
import { ImBubbles3 } from "react-icons/im";
import { ImQuill } from "react-icons/im";
import { ImBook } from "react-icons/im";
import { RiGenderlessFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const DetallesItem = ({ item }) => {

    const [cantidadEnCarrito, setCantidadEnCarrito] = useState(false)
    const { agregarItem } = useContext(CarritoContext)
    const { isDarkMode } = useDarkMode();


    const enCarrito = (contador) => {
        setCantidadEnCarrito(true)
        agregarItem(item, contador)
    }

    return (
        <>
            <div className="contenedorPadre">
                <div className="contenedorImagen">
                    <img src={item.img} alt="" />
                </div>
                <div className={isDarkMode ? "contenedorDescripcion_dark" : "contenedorDescripcion"}>
                    <div>
                        <p>{item.descripcion}</p>
                        <div className={isDarkMode ? "contenedorIconos_dark" : "contenedorIconos"}>
                            <h3><ImBubbles3 className={isDarkMode ? "iconos_dark" : "iconos"}/> {item.idioma}</h3>
                            <h3><ImQuill className={isDarkMode ? "iconos_dark" : "iconos"}/> {item.autor}</h3>
                            <h3><ImBook className={isDarkMode ? "iconos_dark" : "iconos"}/> {item.paginas} páginas</h3>
                            <h3><RiGenderlessFill className={isDarkMode ? "iconos_dark" : "iconos"} /> {item.categoria}</h3>
                        </div>
                    </div>

                    {
                        !cantidadEnCarrito 
                        ? 
                        <Contador stock={item.stock} enCarrito={enCarrito} />
                        :
                        <div className="botonesCompra">
                            <NavLink to={"/carrito"}> <button id="botonIrCarrito">Ir al carrito</button></NavLink>
                            <NavLink to={"/"}><button id="botonSeguirComprando">Seguir comprando</button></NavLink>
                        </div>
                    }

                </div>
            </div>
        </>
    )
}

export default DetallesItem;