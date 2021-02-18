import React, { FunctionComponent, useState } from 'react';
import { Item } from './Item';
import { Categories } from './Categories';
import { Header } from './Header';
import { Product, Order } from '../data/handleOrder';
import { ProductsWrapper } from '../styles/productsList.styles';
import { TailSpin } from '@agney/react-loading';

interface Props {
    products: Product[];
    categories: string[];
    order: Order;
    isLoading: boolean;
}

export const ProductsList: FunctionComponent<Props> = (props) => {
    const [selectedCategory, setCategory] = useState<string>('All');
    const filteredProducts: Product[] = props.products.filter(
        (p) => selectedCategory === 'All' || p.category === selectedCategory
    );

    const selectCategory = (category: string) => {
        setCategory(category);
    };

    if (props.isLoading) return <TailSpin />;

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
                    <Item key={p.id} product={p} />
                ))}
            </ProductsWrapper>
        </div>
    );
};
