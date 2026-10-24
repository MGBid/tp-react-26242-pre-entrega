// import "./ItemDetail.css";
import { Item } from "../Item/Item";

export const ItemDetail = () => {
    return (
        <div className="detail-wrapper">
            <Item {...item}>
                <div className="info-plus">
                    <p><strong>Especialidad: </strong> {item.title}</p>
                    <p><strong>Categoría: </strong> {item.category}</p>
                    <p><strong>Habilidades especiales: </strong> {item.skill}</p>
                    <p><strong>Calificación: </strong> {item.rating} 🐾</p>
                    <p><strong>Referencias de clientes: </strong> {item.comments}</p>
                </div>

                <button className="btn bg-primary primary">Agregar al Carrito</button>
            </Item>
        </div>
    );
}