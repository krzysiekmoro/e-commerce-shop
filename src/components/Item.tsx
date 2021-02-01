import React, { FunctionComponent, useState } from 'react';
import { Product } from '../data/handleOrder';
import { Button, ItemWrapper } from '../styles/item.styles';

interface Props {
    product: Product;
    callback: (product: Product, quantity: number) => void;
}

export const Item: FunctionComponent<Props> = (props) => {
    const [quantity, setQuantity] = useState<number>(1);

    return (
        <ItemWrapper>
            <img alt='one of the product' src={props.product.image} />
            <div>
                <h3>{props.product.name}</h3>
                <p>{props.product.description}</p>
                <p>${props.product.price.toFixed(2)}</p>
            </div>
            <form>
                <select onChange={(e) => setQuantity(Number(e.target.value))}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select>
                <Button onClick={() => props.callback(props.product, quantity)}>
                    <div id='underline'></div>
                    <p>Add To Cart</p>
                </Button>
            </form>
        </ItemWrapper>
    );
};
