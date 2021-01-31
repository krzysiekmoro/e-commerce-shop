import React, { FunctionComponent } from 'react';
import { Order } from '../data/handleOrder';
import { NavLink } from 'react-router-dom';
import { Button, StyledHeader } from '../styles/header.styles';

interface Props {
    order: Order;
}

export const Header: FunctionComponent<Props> = (props) => {
    let count = props.order.productCount;
    return (
        <StyledHeader>
            {count === 0
                ? '(No Products)'
                : `${count} product(s), ${props.order.total.toFixed(2)}`}
            <NavLink to='/order'>
                <Button>Submit Order</Button>
            </NavLink>
        </StyledHeader>
    );
};
