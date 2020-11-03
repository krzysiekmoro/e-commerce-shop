import React, { FunctionComponent, useState } from 'react';
import { Product, Order } from './data/handleOrder';
import { ProductList } from './components/productList';
import { products } from './data/data';

const App: FunctionComponent = () => {
    const [order, setOrder] = useState<Order>(new Order());
    const categories: string[] = [...new Set(products.map((p) => p.category))];

    const addToOrder = (product: Product, quantity: number) => {
        setOrder((order) => {
            order.addProduct(product, quantity);
            return order;
        });
    };

    return (
        <div className='bg-orange-300 min-h-screen'>
            <ProductList
                products={products}
                categories={categories}
                order={order}
                addToOrder={addToOrder}
            />
        </div>
    );
};

export default App;
