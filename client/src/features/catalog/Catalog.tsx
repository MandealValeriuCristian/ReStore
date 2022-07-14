import { Fragment } from "react";
import { Product } from "../../app/models/product";
interface Props{
    products: Product[];
    addProduct: () => void;
}
export default function Catalog({products, addProduct}: Props) {
    return (

        <Fragment> /** or <></> */
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.name} - {product.price}</li>
                ))}
            </ul>
            <button onClick={addProduct}>Add product</button>
        </Fragment>
    )
}