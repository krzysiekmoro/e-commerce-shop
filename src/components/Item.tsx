import React, { FunctionComponent, useState } from 'react';
import { Product } from '../data/handleOrder';
import { ItemWrapper } from '../styles/item.styles';

interface Props {
    product: Product;
    callback: (product: Product, quantity: number) => void;
}

export const Item: FunctionComponent<Props> = (props) => {
    const [quantity, setQuantity] = useState<number>(1);

    return (
        <ItemWrapper>
            <div>
                <h3>{props.product.name}</h3>
                <p>{props.product.description}</p>
                <p>${props.product.price.toFixed(2)}</p>
            </div>
            <div>
                <select onChange={(e) => setQuantity(Number(e.target.value))}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select>
                <button onClick={() => props.callback(props.product, quantity)}>
                    Add To Cart
                </button>
            </div>
        </ItemWrapper>
    );
};
