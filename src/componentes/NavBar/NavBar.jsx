import './NavBar.css';
import Carrito from '../Carrito/Carrito';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
//Barra de navegacion
function NavBar() {

    const {cantidadEnCarrito} = useContext(CarritoContext)

    return (
        <>

            <nav className="navegacion">

                <div className="navegacion__logo">
                    <NavLink  
                        to="/"><img src="https://i.postimg.cc/vH9prjTf/Dorado-y-Azul-cono-de-Libro-Educaci-n-Logo.png" alt="" />
                    </NavLink>
                </div>

                <ul className="navegacion__utilidades">
                    <NavLink className='link' to="/"><li className='utilidades'>Home</li></NavLink>

                    <li className='utilidades'>
                        Géneros
                        <ul className="menuDesplegado">
                            <NavLink className="subMenu" to="/categoria/Romantico"><li>Románticos</li></NavLink>
                            <NavLink className="subMenu" to="/categoria/Fantástico"><li>Fantástico</li></NavLink>
                            <NavLink className="subMenu" to="/categoria/Narrativa"><li>Narrativa</li></NavLink>
                            <NavLink className="subMenu" to="/categoria/Histórico"><li>Histórico</li></NavLink>
                            <NavLink className="subMenu" to="/categoria/Autoayuda"><li>Autoayuda</li></NavLink>
                        </ul>
                    </li>
                    
                    <NavLink className="link" to={"/promociones"}><li className='utilidades'>Promociones</li></NavLink>
                    <NavLink className="link"><li className='utilidades'>Buscar</li></NavLink>
                    <NavLink className="link" to={"/contacto"}><li className='utilidades'>Contacto</li></NavLink>
                </ul>

                <div className="navegacion__carrito">
                    <NavLink to={"/carrito"}><button><Carrito/></button></NavLink>
                    {cantidadEnCarrito()>0 && <div id='numeroCarrito'>{cantidadEnCarrito()}</div>}

                </div>

            </nav>
        </>
    )


}



export default NavBar;