import React, { FunctionComponent } from 'react';
import { Order } from '../data/handleOrder';

interface Props {
    order: Order;
}

export const Header: FunctionComponent<Props> = (props) => {
    let count = props.order.productCount;
    return (
        <div>
            {count === 0
                ? '(No Products)'
                : `${count} product(s), ${props.order.total.toFixed(2)}`}
            <button>Submit Order</button>
        </div>
    );
};
