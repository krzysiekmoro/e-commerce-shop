import React, { FunctionComponent, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../data/handleOrder';
import { Button, ItemWrapper } from '../styles/itemDetails.styles';

interface Props {
    products: Product[];
    callback: (product: Product, quantity: number) => void;
}

export const ItemDetails: FunctionComponent<Props> = (props) => {
    const [quantity, setQuantity] = useState<number>(1);

    let { id } = useParams<{ id: string }>();
    const product = props.products[parseInt(id) - 1];

    return (
        <ItemWrapper>
            <img alt='one of the product' src={product.image} />
            <div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>${product.price.toFixed(2)}</p>
            </div>
            <form>
                <select onChange={(e) => setQuantity(Number(e.target.value))}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select>
                <Button onClick={() => props.callback(product, quantity)}>
                    <div id='underline'></div>
                    <p>Add To Cart</p>
                </Button>
            </form>
        </ItemWrapper>
    );
};
