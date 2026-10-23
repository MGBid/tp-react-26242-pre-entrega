import { Item } from "../Item/Item";
import { Link } from "react-router-dom";
import "./ItemList.css";

export const ItemList = ({ products }) => {
    if(!products.length) {
        return <p>No Hay Productos</p>
    }
    
    return (
    <div className="products-container">
        {products.map( product => (
            <Link to={`/product/${product.id}`} key={product.id}>
                <Item {...product} />
            </Link>
        ))}
    </div>
    );
}