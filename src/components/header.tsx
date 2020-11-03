import React, { FunctionComponent } from 'react';
import { Order } from '../data/handleOrder';

interface Props {
    order: Order;
}

export const Header: FunctionComponent<Props> = (props) => {
    let count = props.order.productCount;
    return (
        <div className='flex items-center justify-end flex-wrap bg-teal-500 p-4'>
            {count === 0
                ? '(No Products)'
                : `${count} product(s), ${props.order.total.toFixed(2)}`}
            <button className='flex items-center ml-4 px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white'>
                Submit Order
            </button>
        </div>
    );
};
