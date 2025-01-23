import { useState } from "react";
import Item from "../Items/Items";
import "./ListaDeItems.css";
import { useDarkMode } from "../../context/DarkMode";
import { useBusqueda } from '../../context/BusquedaContext';


function ListaDeItems({ productos }) {

    const [paginaActual, setPaginaActual] = useState(0);
    const itemsPorPagina = 10;

    const { isDarkMode } = useDarkMode();
    const { BusquedaQuery } = useBusqueda();

    const productosFiltrados = productos.filter((producto) =>
        producto.titulo.toLowerCase().includes(BusquedaQuery.toLowerCase())
    );

    const productosPaginados = productosFiltrados.slice(paginaActual * itemsPorPagina, (paginaActual + 1) * itemsPorPagina);

    const siguientePagina = () => {
        if ((paginaActual + 1) * itemsPorPagina < productosFiltrados.length) {
          setPaginaActual(paginaActual + 1);
        }
      };

    const paginaAnterior = () => {
        if (paginaActual > 0) {
            setPaginaActual(paginaActual - 1);
        }
    };


    return (
        <>


            <div className="array_de_items">
                {productosPaginados.map((producto) => (
                    <Item key={producto.id} producto={producto} />
                ))}
            </div>

            <div className="paginacion">
                <button onClick={paginaAnterior} disabled={paginaActual === 0} className={isDarkMode ? "dark-button" : ""}>
                    Anterior
                </button>

                <button onClick={siguientePagina} disabled={(paginaActual + 1) * itemsPorPagina >= productos.length} className={isDarkMode ? "dark-button" : ""}>
                    Siguiente
                </button>
            </div>


        </>
    )
}

export default ListaDeItems;