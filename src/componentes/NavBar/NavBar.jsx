import './NavBar.css';
import Carrito from '../Carrito/Carrito';
import { NavLink } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { useDarkMode } from '../../context/DarkMode';
import { useBusqueda } from '../../context/BusquedaContext';
import { MdOutlineWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
//Barra de navegacion
function NavBar() {

    const { cantidadEnCarrito } = useContext(CarritoContext)
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const { updateBusquedaQuery } = useBusqueda();

    const [mostrarBarra, setMostrarBarra] = useState(false)
    const [menuVisible, setMenuVisible] = useState(false);



    const barraDeBusqueda = () => {
        setMostrarBarra((prev) => !prev)
    };

    const handleBusquedaChange = (event) => {
        updateBusquedaQuery(event.target.value);
    };

    const botonMenu = () => {
        setMenuVisible(!menuVisible);
    };




    return (
        <>

            <nav className="navegacion">

                <div className="navegacion__logo">
                    <NavLink
                        to="/"><img src="https://i.postimg.cc/vH9prjTf/Dorado-y-Azul-cono-de-Libro-Educaci-n-Logo.png" alt="" />
                    </NavLink>
                </div>



                <ul className={`navegacion__utilidades ${menuVisible ? "show" : ""} ${menuVisible && isDarkMode ? "show_dark" : ""}`}>
                    <NavLink className='link' to="/"><li className={isDarkMode ? "utilidades_dark" : 'utilidades'}>Home</li></NavLink>

                    <li className={isDarkMode ? "utilidades_dark" : 'utilidades'}>
                        Géneros
                        <ul className={isDarkMode ? "menuDesplegado_dark":"menuDesplegado"}>
                            <NavLink className="subMenu" to="/categoria/Romantico"><li>Románticos</li></NavLink>
                            <NavLink className="subMenu" to="/categoria/Fantástico"><li>Fantástico</li></NavLink>
                            <NavLink className="subMenu" to="/categoria/Narrativa"><li>Narrativa</li></NavLink>
                            <NavLink className="subMenu" to="/categoria/Histórico"><li>Histórico</li></NavLink>
                            <NavLink className="subMenu" to="/categoria/Autoayuda"><li>Autoayuda</li></NavLink>
                            <NavLink className="subMenu" to="/categoria/Misterio"><li>Misterio</li></NavLink>
                            <NavLink className="subMenu" to="/categoria/Ciencias"><li>Ciencias</li></NavLink>
                        </ul>
                    </li>

                    <NavLink className="link" to={"/promociones"}><li className={isDarkMode ? "utilidades_dark" : 'utilidades'}>Promociones</li></NavLink>
                    <NavLink className="link" to={"/contacto"}><li className={isDarkMode ? "utilidades_dark" : 'utilidades'}>Contacto</li></NavLink>

                    <NavLink className="link"><li onClick={barraDeBusqueda} className={`${mostrarBarra ? "boton_lupa" : "boton_lupa_off"} ${mostrarBarra && isDarkMode ? "boton_lupa_dark" : ""} ${isDarkMode ? "boton_busqueda_dark" : "boton_busqueda"}`}><IoIosSearch /></li></NavLink>
                    {mostrarBarra && (
                        <div className="barra_busqueda">
                            <input
                                type="text"
                                placeholder="Ingrese un título"
                                className="input_busqueda"
                                onChange={handleBusquedaChange}
                            />
                        </div>
                    )}
                </ul>



                <div className='contenedor_carrito_darkmode'>

                    <div className={isDarkMode ? "navegacion__carrito__dark" : "navegacion__carrito"}>
                        <NavLink to={"/carrito"}><button><Carrito /></button></NavLink>
                        {cantidadEnCarrito() > 0 && <div id='numeroCarrito'>{cantidadEnCarrito()}</div>}

                    </div>

                    <div className={isDarkMode ? "modo_claro" : "modo_oscuro"}>
                        <button onClick={toggleDarkMode} className={isDarkMode ? "dark-button" : ""}>
                            {isDarkMode ? <FaMoon /> : <MdOutlineWbSunny />}
                        </button>
                    </div>

                    <div className='boton_menu'>
                        <button onClick={botonMenu}>
                            <IoMenu />
                        </button>
                    </div>
                    
                </div>







            </nav>


        </>
    )


}



export default NavBar;