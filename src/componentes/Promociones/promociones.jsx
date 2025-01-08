import "./promociones.css"
import CardPromociones from "../CardPromociones/cardPromociones";



function Promociones(){
    return(
        <>
            <div className="contenedor">
                <CardPromociones imagen={"https://i.postimg.cc/8kHCC44p/IMG-20241108-204930-417.webp"}/>
                <CardPromociones imagen={"https://i.postimg.cc/sDggGWHp/IMG-20241108-204943-754.webp"}/>
                <CardPromociones imagen={"https://i.postimg.cc/1XJRYRXn/IMG-20241108-205001-051.webp"}/>     
            </div>

            <div className="descripcion">
                <p>Las promociones se aplican automáticamente al agregar 5, 7 o 10 libros en el carrito.</p>
            </div>         
        </>
    )   
    
}       

export default Promociones;