import React, { FunctionComponent, useState } from 'react';
import { Item } from './Item';
import { Categories } from './Categories';
import { Header } from './Header';
import { Product, Order } from '../data/handleOrder';
import { ProductsWrapper } from '../styles/productsList.styles';

interface Props {
    products: Product[];
    categories: string[];
    order: Order;
    addToOrder: (product: Product, quantity: number) => void;
}

export const ProductsList: FunctionComponent<Props> = (props) => {
    const [selectedCategory, setCategory] = useState<string>('All');
    const filteredProducts: Product[] = props.products.filter(
        (p) => selectedCategory === 'All' || p.category === selectedCategory
    );

    const selectCategory = (category: string) => {
        setCategory(category);
    };

    return (
        <div>
            <Header order={props.order} />
            <Categories
                categories={props.categories}
                selected={selectedCategory}
                selectCategory={selectCategory}
            />
            <ProductsWrapper>
                {filteredProducts.map((p) => (
                    <Item key={p.id} product={p} callback={props.addToOrder} />
                ))}
            </ProductsWrapper>
        </div>
    );
};
