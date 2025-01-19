import "./contacto.css"
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


function Contacto() {
    return (
        <>
            <div className="contenedor">
                <div className="contenedor__datos">
                    <h1>Contacto</h1>
                    <hr />
                    <p>Somos una tienda electrónica dedicada a brindarle los mejores libros en formato digital. Para comunicarce directamente con nosotros
                        puede encontrarnos en las siguientes direcciones web:
                    </p>
                    <div className="contenedor_links">
                        <a id="instagram" href="https://www.instagram.com/libros_online_zwilling/"><FaInstagram />INSTAGRAM</a>
                        <a id="whatsapp" href="https://wa.me/5493541685137"><FaWhatsapp />WHATSAPP</a>
                    </div>

                </div>
                <div className="contenedor__img">
                    <img src="https://i.postimg.cc/Gt9SK0Kb/okey.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default Contacto;