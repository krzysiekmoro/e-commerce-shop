import React, { FunctionComponent, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../data/handleOrder';
import { Button, Container } from '../styles/itemDetails.styles';

interface Props {
    products: Product[];
    callback: (product: Product, quantity: number) => void;
}

export const ItemDetails: FunctionComponent<Props> = (props) => {
    const [quantity, setQuantity] = useState<number>(1);

    let { id } = useParams<{ id: string }>();
    const product = props.products[parseInt(id) - 1];

    return (
        <Container>
            <div className='images'>
                <img alt='one of the product' src={product.image} />{' '}
            </div>

            <p className='pick'>choose quantity</p>
            <select onChange={(e) => setQuantity(Number(e.target.value))}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
            </select>
            <div className='product'>
                <p>{product.category}</p>
                <h1>{product.title}</h1>
                <h2>${product.price.toFixed(2)}</h2>
                <p className='desc'>{product.description}</p>
                <div className='buttons'>
                    <button
                        className='add'
                        onClick={() => props.callback(product, quantity)}
                    >
                        Add to Cart
                    </button>
                    <button className='like'>
                        <span>♥</span>
                    </button>
                </div>
            </div>
        </Container>
    );
};
