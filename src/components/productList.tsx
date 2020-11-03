import React, { FunctionComponent, useState } from 'react';
import { ProductItem } from './productItem';
import { CategoryList } from './categoryList';
import { Header } from './header';
import { Product, Order } from '../data/handleOrder';

interface Props {
    products: Product[];
    categories: string[];
    order: Order;
    addToOrder: (product: Product, quantity: number) => void;
}

export const ProductList: FunctionComponent<Props> = (props) => {
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
            <div className='flex'>
                <CategoryList
                    categories={props.categories}
                    selected={selectedCategory}
                    selectCategory={selectCategory}
                />
                <div className='w-3/4'>
                    {filteredProducts.map((p) => (
                        <ProductItem
                            key={p.id}
                            product={p}
                            callback={props.addToOrder}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
