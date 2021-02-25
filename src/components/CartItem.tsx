import React, { FunctionComponent } from 'react';
import { OrderLine } from '../data/handleOrder';

interface Props {
    orderLine: OrderLine;
}

export const CartItem: FunctionComponent<Props> = ({ orderLine }) => {
    return (
        <tr key={orderLine.product.id}>
            <td>{orderLine.quantity}</td>
            <td>{orderLine.product.title}</td>
            <td>${orderLine.product.price.toFixed(2)}</td>
            <td>${orderLine.total.toFixed(2)}</td>
        </tr>
    );
};
