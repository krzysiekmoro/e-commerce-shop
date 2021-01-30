import React, { FunctionComponent, useState } from 'react';
import { Product } from '../data/handleOrder';

interface Props {
    product: Product;
    callback: (product: Product, quantity: number) => void;
}

export const ProductItem: FunctionComponent<Props> = (props) => {
    const [quantity, setQuantity] = useState<number>(1);

    return (
        <div>
            <h4>
                <div>{props.product.name}</div>
                <span>${props.product.price.toFixed(2)}</span>
            </h4>
            <h5>{props.product.description}</h5>
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
        </div>
    );
};
