import React, { FunctionComponent, useEffect, useState } from 'react';
import { Product, Order } from './data/handleOrder';
import { ProductList } from './components/productList';
import { loadProducts } from './data/dataHandler';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';

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
        <div className='bg-gray-300 min-h-screen'>
            <BrowserRouter>
                <Switch>
                    <Route path='/products'>
                        <ProductList
                            products={products}
                            categories={categories}
                            order={order}
                            addToOrder={addToOrder}
                        />
                    </Route>
                    <Redirect to='/products' />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;
