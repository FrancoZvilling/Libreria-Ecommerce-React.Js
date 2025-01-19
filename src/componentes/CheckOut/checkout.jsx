import { useState, useContext } from "react"
import "./checkout.css"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../../firebase/firebase"
import { CarritoContext } from "../../context/CarritoContext"
import CarritoCheckOut from "../CarritoCheckOut/CarritoCheckOut"

function CheckOut() {
    const [user, setUser] = useState({})
    const [orderId, setOrderId] = useState("")
    const { carrito, total, limpiarCarrito } = useContext(CarritoContext)
    const datosComprador = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    console.log(user)

    const finalizarCompra = (e) => {
        e.preventDefault()
        if (user.nombre && user.correo && user.telefono) {
            let orden = {
                user,
                item: carrito,
                total: total(),
                fecha: serverTimestamp()
            }
            const ventas = collection(db, "ordenes")
            addDoc(ventas, orden)
                .then((res) => {
                    setOrderId(res.id)
                    limpiarCarrito()
                })
                .catch((error) => console.log(error))
        } else {
            alert("complete los campos")
        }
    }

    return (
        <>
            {orderId !== ""
                ?
                <div className="compraFinalizada">
                    <h2>Muchas gracias! Su pedido será enviado</h2>
                    <h5>Su numero de orden es: 
                       <span id="numero_orden"> {orderId}</span> 
                    </h5>
                </div>
                :
                <>
                    <div className="titulo">
                        <h1>TERMINAR COMPRA</h1>
                    </div>


                    
                        <form onSubmit={finalizarCompra} className="formulario">
                            <h3>DATOS PERSONALES</h3>
                            <div className="form">
                                <label className="form-label">Ingrese su nombre y apellido</label>
                                <input className="form-input" onChange={datosComprador} type="text" placeholder="Nombre y Apellido" name="nombre" />
                            </div>
                            <div className="form">
                                <label className="form-label">Ingrese su correo electronico</label>
                                <input className="form-input" onChange={datosComprador} type="email" placeholder="Correo electrónico" name="correo" />
                            </div>
                            <div className="form">
                                <label className="form-label">Ingrese su número de telefono celular</label>
                                <input className="form-input" onChange={datosComprador} type="number" placeholder="Celular" name="telefono" />
                            </div>

                            <button type="submit">generar orden</button>
                        </form>

                        <CarritoCheckOut/>
                    
                </>}
        </>
    )
}

export default CheckOut