const { createContext, useState } = require("react");


export const CarritoContext = createContext()

export const CarritoProvider = ({children}) =>{
    const [carrito, setCarrito] = useState([])
    

    const agregarItem = (item, cantidad) =>{
        if(estaEnCarrito(item.id)){
            
        }else{
            setCarrito([...carrito, {...item, cantidad}])
        }
        
    }

    const limpiarCarrito = ()=>{
        setCarrito([])
    }

    const estaEnCarrito = (id) =>{
        return carrito.some((item)=> item.id === id)
    }

    const eliminarItem = (id) =>{
        setCarrito(carrito.filter((item)=> item.id !== id))
    }

    const cantidadEnCarrito = () =>{
        return carrito.reduce((acumulador, item)=>acumulador + item.cantidad, 0)
    }

    const total = () =>{
        if (cantidadEnCarrito() === 5){
            return 7500
        }else if(cantidadEnCarrito() === 7){
            return 9500
        }else if(cantidadEnCarrito()=== 10){
            return 12000
        }else
            return carrito.reduce((acumulador, item)=> acumulador + item.cantidad * item.precio, 0)
    }

    return(
        <CarritoContext.Provider value={{carrito, agregarItem, limpiarCarrito, estaEnCarrito, eliminarItem, cantidadEnCarrito, total}}>
            {children}
        </CarritoContext.Provider>
    )
}