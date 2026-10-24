import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
//import "./ItemDetailContainer.css";

export const ItemDetailContainer = () => {
    const {id} = useParams();
    const [itemDetail, setItemDetail] = useState(null);
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        setItemDetail(null);
        setLoading(true);
        setErrors(null);

        fetch("/data/products.json")
        .then(res => {
            if(!res.ok) {
                throw new Error("❌ Error al cargar los Productos ❌");
            }
            return res.json();
        })
        .then(data => {
            const item = data.find(product => product.id === id);
            // Si lo encuentro es un Obj, sino es undefined
            if(item) {
                setItemDetail(item);
                return;
            }
            throw new Error("🕵️‍♀️ Elemento No Encontrado...");
        })
        .catch( err => setErrors(err.message) )
        .finally( () => setLoading(false) );
    }, [id]);

    if(loading) return <p>Cargando...</p>
    if (errors) return <p>{errors}</p>      
    if(!itemDetail) return <p>Producto No Encontrado!</p>

    return (
    <section>
        <h1>{itemDetail.name}    🐈</h1>
        
        <div className="products-container">
            <ItemDetail item={itemDetail} />
        </div>
    </section>
    );
}