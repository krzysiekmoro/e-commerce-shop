import React, { FunctionComponent, useState } from 'react';
import './App.css';
import { Product, Order } from './data/handleOrder';
import { ProductList } from './components/productList';
import { products } from './data/data';

const App: FunctionComponent = () => {
    const [order, setOrder] = useState<Order>(new Order());
    const categories = products.map((p) => p.category);

    const addToOrder = (product: Product, quantity: number) => {
        setOrder((order) => {
            order.addProduct(product, quantity);
            return order;
        });
    };

    return (
        <div className='App bg-orange-400'>
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
