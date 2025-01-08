import "./cardPromociones.css"

function CardPromociones({imagen}){

    return (
        <>
            <div className="contenedor__card">
                <img src={imagen} alt="" />
            </div>
        </>
    )
}

export default CardPromociones; 