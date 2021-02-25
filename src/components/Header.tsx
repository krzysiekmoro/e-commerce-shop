import React, { FunctionComponent } from 'react';
import { Order } from '../data/handleOrder';
import { Button, StyledHeader } from '../styles/header.styles';

interface Props {
    order: Order;
    openCart: () => void;
}

export const Header: FunctionComponent<Props> = (props) => {
    let count = props.order.productCount;
    return (
        <StyledHeader>
            {count === 0
                ? '(No Products)'
                : `${count} product(s), ${props.order.total.toFixed(2)}`}

            <Button onClick={props.openCart}>Submit Order</Button>
        </StyledHeader>
    );
};
