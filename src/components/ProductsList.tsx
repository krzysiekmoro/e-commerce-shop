import React, { FunctionComponent, useState } from 'react';
import { Item } from './Item';
import { Categories } from './Categories';
import { Header } from './Header';
import { Cart } from './Cart';
import { Product, Order } from '../data/handleOrder';
import { ProductsWrapper, CartWrapper } from '../styles/productsList.styles';
import { TailSpin } from '@agney/react-loading';

interface Props {
    products: Product[];
    categories: string[];
    order: Order;
    isLoading: boolean;
    submitCallback: () => void;
}

enum CartState {
    CartShown = 'cart-shown',
    CartClosed = 'cart-closed',
}

export const ProductsList: FunctionComponent<Props> = (props) => {
    const [selectedCategory, setCategory] = useState<string>('All');
    const [showCart, setCart] = useState<string>(CartState.CartClosed);

    const filteredProducts: Product[] = props.products.filter(
        (p) => selectedCategory === 'All' || p.category === selectedCategory
    );

    const selectCategory = (category: string) => {
        setCategory(category);
    };

    const openCart = () => {
        if (showCart === CartState.CartClosed) setCart(CartState.CartShown);
        else setCart(CartState.CartClosed);
        console.log(showCart);
    };

    if (props.isLoading) return <TailSpin />;

    return (
        <div>
            <Header order={props.order} openCart={openCart} />
            <Categories
                categories={props.categories}
                selected={selectedCategory}
                selectCategory={selectCategory}
            />
            <ProductsWrapper>
                {filteredProducts.map((p) => (
                    <Item key={p.id} product={p} />
                ))}
            </ProductsWrapper>
            <CartWrapper className={showCart}>
                <Cart
                    order={props.order}
                    submitCallback={() => props.submitCallback()}
                />
            </CartWrapper>
        </div>
    );
};
