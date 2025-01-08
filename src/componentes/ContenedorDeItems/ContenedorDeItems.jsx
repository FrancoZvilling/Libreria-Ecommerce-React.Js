import ListaDeItems from "../ListaDeItems/ListaDeItems";
import { useEffect, useState } from "react";
import { diley_productos } from "../../mock/data";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import {db} from "../../firebase/firebase"



function ContenedorDeItems(){

    const [productos, setProductos] = useState([]);
    const {categoriaId} = useParams()

    /*useEffect(()=>{
        diley_productos()
        .then((resolve)=>{
            if(categoriaId){
                
                setProductos(resolve.filter((item)=> item.categoria === categoriaId))
            }else{
                setProductos(resolve)
            }
            
        })
    },[categoriaId])*/

    useEffect(()=>{
        const coleccionProductos = categoriaId ? query(collection(db, "productos"), where("categoria", "==", categoriaId)) : collection(db, "productos")
        getDocs(coleccionProductos)
        .then((res)=>{
            const list = res.docs.map((prod)=>{
                return{
                    id:prod.id,
                    ...prod.data()
                }
            })
            setProductos(list)
        })
        .catch((error)=> console.log(error))
    },[categoriaId])
    

    return (
        <>
            <ListaDeItems productos={productos}/>
        </>
    )
}

export default ContenedorDeItems;