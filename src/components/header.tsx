import React, { FunctionComponent } from 'react';
import { Order } from '../data/handleOrder';
import { NavLink } from 'react-router-dom';

interface Props {
    order: Order;
}

export const Header: FunctionComponent<Props> = (props) => {
    let count = props.order.productCount;
    return (
        <div className='flex justify-end items-center h-16 bg-yellow-400'>
            {count === 0
                ? '(No Products)'
                : `${count} product(s), ${props.order.total.toFixed(2)}`}
            <NavLink to='/order' className='btn-blue mx-2'>
                Submit Order
            </NavLink>
        </div>
    );
};
