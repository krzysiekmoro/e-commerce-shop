import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { Order } from '../data/handleOrder';

interface Props {
    order: Order;
    submitCallback: () => void;
}

export const OrderDetails: FunctionComponent<Props> = (props) => {
    return (
        <div>
            <h3>Order Summary</h3>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Quantity</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.order.orderLines.map((line) => (
                            <tr key={line.product.id}>
                                <td>{line.quantity}</td>
                                <td>{line.product.title}</td>
                                <td>${line.product.price.toFixed(2)}</td>
                                <td>${line.total.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total:</th>
                            <th>${props.order.total.toFixed(2)}</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div>
                <NavLink to='/products'>Back</NavLink>
                <button onClick={props.submitCallback}>Submit Order</button>
            </div>
        </div>
    );
};
