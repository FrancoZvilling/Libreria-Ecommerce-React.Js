import "./Items.css";
import { NavLink } from "react-router-dom";
import { useDarkMode } from '../../context/DarkMode';

function Item({ producto }) {

    const { isDarkMode} = useDarkMode();

    return (
        <>
            
                <div className="contenedor_carta">
                    <div className={isDarkMode ? "carta_dark":"carta"}>
                        
                        <div className="contenedor_imagen">
                        <NavLink className="linkItem" to={`/item/${producto.id}`}><img src={producto.img} alt="" /></NavLink>
                        </div>

                    </div>
                    <div className={isDarkMode ? "detalles_carta_dark":"detalles_carta"}>
                        <h2>{producto.titulo}</h2>
                        <h3>${producto.precio}</h3>
                    </div>
                </div>
            


        </>
    )
}

export default Item;