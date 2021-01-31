import React, { FunctionComponent, useState } from 'react';
import { Product } from '../data/handleOrder';

interface Props {
    product: Product;
    callback: (product: Product, quantity: number) => void;
}

export const ProductItem: FunctionComponent<Props> = (props) => {
    const [quantity, setQuantity] = useState<number>(1);

    return (
        <div className='flex items-center justify-between border rounded border-black h-16 mb-2 mt-2 mr-4'>
            <h4 className='ml-4'>
                <div className='text-xl font-medium'>{props.product.name}</div>
                <span>${props.product.price.toFixed(2)}</span>
            </h4>
            <h5>{props.product.description}</h5>
            <div className='flex justify-between mr-2'>
                <select
                    className='block bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
                    onChange={(e) => setQuantity(Number(e.target.value))}
                >
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select>
                <button
                    className='btn-blue mx-2'
                    onClick={() => props.callback(props.product, quantity)}
                >
                    Add To Cart
                </button>
            </div>
        </div>
    );
};
