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
            <div className='bg-yellow-500'>
                <div className='btn-categories mx-4'>
                    <button className='mr-2'>Categories</button>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        className='h-6 w-6'
                    >
                        <path
                            fill-rule='evenodd'
                            d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                            clip-rule='evenodd'
                        />
                    </svg>
                </div>
                <CategoryList
                    categories={props.categories}
                    selected={selectedCategory}
                    selectCategory={selectCategory}
                />
            </div>

            <div className=''>
                {filteredProducts.map((p) => (
                    <ProductItem
                        key={p.id}
                        product={p}
                        callback={props.addToOrder}
                    />
                ))}
            </div>
        </div>
    );
};
