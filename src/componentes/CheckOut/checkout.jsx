import { useState, useContext } from "react";
import "./checkout.css";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { CarritoContext } from "../../context/CarritoContext";
import CarritoCheckOut from "../CarritoCheckOut/CarritoCheckOut";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";

function CheckOut() {
    const [user, setUser] = useState({});
    const [orderId, setOrderId] = useState("");
    const { carrito, total, limpiarCarrito } = useContext(CarritoContext);

    const datosComprador = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const finalizarCompra = (e) => {
        e.preventDefault();

        if (user.correo !== user.correoRepetido) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Los correos electrónicos no coinciden. Por favor, verifica nuevamente.",
            });
            return;
        }
        
        if (user.nombre && user.correo && user.telefono) {
            let orden = {
                user,
                item: carrito,
                total: total(),
                fecha: serverTimestamp(),
            };
            const ventas = collection(db, "ordenes");
            
            // Se crea la orden en Firebase
            addDoc(ventas, orden)
                .then((res) => {
                    // Si la orden se crea correctamente
                    setOrderId(res.id);
                    limpiarCarrito();

                    Swal.fire({
                        icon: "success",
                        title: "¡Compra realizada!",
                        text: `Tu número de orden es: ${res.id}`,
                    });
                })
                .catch((error) => {
                    // Si ocurre un error, muestra el error después de 7 segundos
                    console.error(error);
                    setTimeout(() => {
                        Swal.fire({
                            icon: "error",
                            title: "Error",
                            text: "Ocurrió un problema al generar tu orden. Intenta nuevamente.",
                        });
                    }, 7000);
                });
        } else {
            // Si falta completar algún campo, muestra un error inmediatamente
            Swal.fire({
                icon: "error",
                title: "Upsss...",
                text: "¡Por favor, completa todos los campos!",
            });
        }
    };

    return (
        <>
            {orderId !== "" ? (
                <div className="compraFinalizada">
                    <h2>Muchas gracias! Su pedido será enviado</h2>
                    <NavLink className='link'  to="/"><button id="compra_home">Volver a Home</button></NavLink>
                </div>
            ) : (
                <>
                    <div className="titulo">
                        <h1>TERMINAR COMPRA</h1>
                    </div>

                    <form onSubmit={finalizarCompra} className="formulario">
                        <h3>DATOS PERSONALES</h3>
                        <div className="form">
                            <div className="form_icon">
                                <FaUser />
                                <input
                                    className="form-input"
                                    onChange={datosComprador}
                                    type="text"
                                    placeholder="Nombre y Apellido"
                                    name="nombre"
                                />
                            </div>
                            <div className="form_icon">
                                <MdEmail />
                                <input
                                    className="form-input"
                                    onChange={datosComprador}
                                    type="email"
                                    placeholder="Correo electrónico"
                                    name="correo"
                                />
                            </div>
                            <div className="form_icon">
                                <MdEmail />
                                <input
                                    className="form-input"
                                    onChange={datosComprador}
                                    type="email"
                                    placeholder="Repite tu correo electrónico"
                                    name="correoRepetido"
                                />
                            </div>
                            <div className="form_icon">
                                <FaMobileAlt />
                                <input
                                    className="form-input"
                                    onChange={datosComprador}
                                    type="number"
                                    placeholder="Celular"
                                    name="telefono"
                                />
                            </div>
                        </div>

                        <button id="button_submit" type="submit">
                            generar orden
                        </button>
                    </form>

                    <CarritoCheckOut />
                </>
            )}
        </>
    );
}

export default CheckOut;
