import React, { FunctionComponent, useEffect, useState } from 'react';
import { Product, Order } from './data/handleOrder';
import { ProductList } from './components/productList';
import { loadProducts } from './data/dataHandler';

const App: FunctionComponent = () => {
    const [order, setOrder] = useState<Order>(new Order());
    const [products, setProducts] = useState<Product[]>([]);
    const categories: string[] = [...new Set(products.map((p) => p.category))];

    const addToOrder = (product: Product, quantity: number) => {
        setOrder((order) => {
            order.addProduct(product, quantity);
            return order;
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            await loadProducts(setProducts);
        };
        fetchData();
    }, []);

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
