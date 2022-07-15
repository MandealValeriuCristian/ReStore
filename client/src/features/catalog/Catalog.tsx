import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Fragment } from "react";
import { Product } from "../../app/models/product";
interface Props{
    products: Product[];
    addProduct: () => void;
}
export default function Catalog({products, addProduct}: Props) {
    return (

        <Fragment>
            <List>
                {products.map(product => (
                    <ListItem key={product.id}>
                        <ListItemAvatar>
                            <Avatar src={product.pictureUrl} />
                        </ListItemAvatar>
                        <ListItemText>{product.name} - {product.price}</ListItemText>
                    </ListItem>
                ))}
            </List>
            <Button variant='contained' onClick={addProduct}>Add product</Button>
        </Fragment>
    )
}