import { useEffect, useState} from "react";
import { traerProducto } from "../../mock/data";
import DetallesItem from "../DetallesItem/DetallesItem";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc} from "firebase/firestore";
import { db } from "../../firebase/firebase";


const ContenedorDetallesItems = () =>{

    const [item, setItem] = useState({})
    const {id} = useParams()

    /*useEffect(()=>{
        traerProducto(id)
        .then((resolve)=>setItem(resolve))
    },[id])*/       

    useEffect(()=>{
        const coleccionProductos = collection(db, "productos")
        const documento = doc(coleccionProductos, id)
        getDoc(documento)
        .then((res)=> setItem({id:res.id, ...res.data()}))
        .catch((error)=>console.log(error))
    }, [])
    
  
    return(
        <>
            <DetallesItem item={item}/>
        </>
    )
}

export default ContenedorDetallesItems;