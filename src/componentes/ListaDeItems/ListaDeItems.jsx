import Item from "../Items/Items";
import "./ListaDeItems.css";


function ListaDeItems({productos}){

    
    
    return(
        <>
            <div className="array_de_items">
                {productos.map((producto)=> <Item key={producto.id} producto={producto}/>)}
            </div>
        </>
    )
}

export default ListaDeItems;