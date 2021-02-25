
import styled from "styled-components";

export const ProductsWrapper = styled.div`
    padding: 15px;
    display: flex;
    flex-flow: row wrap;
`;

export const CartWrapper = styled.div`
    background: #fff;
    position: absolute;
    top: 10%;
    right: 0;
    padding: 15px;

    &.cart-closed {
        visibility: hidden;
    }

    &.cart-shown {
        visibility: visible;
    }
`;