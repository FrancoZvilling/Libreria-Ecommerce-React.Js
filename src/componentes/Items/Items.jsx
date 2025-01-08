import "./Items.css";
import { NavLink } from "react-router-dom";

function Item({ producto }) {

    return (
        <>
            
                <div className="contenedor_carta">
                    <div className="carta">
                        
                        <div className="contenedor_imagen">
                        <NavLink className="linkItem" to={`/item/${producto.id}`}><img src={producto.img} alt="" /></NavLink>
                        </div>

                    </div>
                    <div className="detalles_carta">
                        <h2>{producto.titulo}</h2>
                        <h3>${producto.precio}</h3>
                    </div>
                </div>
            


        </>
    )
}

export default Item;