import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { Order } from '../data/handleOrder';
import { CartItem } from './CartItem';

interface Props {
    order: Order;
    submitCallback: () => void;
}

export const Cart: FunctionComponent<Props> = (props) => {
    return (
        <div>
            <h3>Order Summary</h3>

            {props.order.orderLines.map((line) => (
                <CartItem orderLine={line}></CartItem>
            ))}

            <p>Total:</p>
            <p>${props.order.total.toFixed(2)}</p>

            <div>
                <NavLink to='/products'>Back</NavLink>
                <button onClick={props.submitCallback}>Submit Order</button>
            </div>
        </div>
    );
};
