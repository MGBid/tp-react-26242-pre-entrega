import "./Item.css";

export const Item = ({ name, price, currency, description, image, children }) => {

    return (
        <article className="card">
            <img src={image} />
            <h3>{name}</h3>
            <p>{description}</p>
            <p>${price} {currency} 🐟</p>

            {children}
        </article>
    );
}