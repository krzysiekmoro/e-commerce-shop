import React, { FunctionComponent, useEffect, useState } from 'react';
import { Product, Order } from './data/handleOrder';
import { ProductList } from './components/productList';
import { OrderDetails } from './components/orderDetails';
import { Summary } from './components/summary';
import { loadProducts, storeOrder } from './data/dataHandler';
import {
    Switch,
    Route,
    Redirect,
    BrowserRouter,
    RouteComponentProps,
} from 'react-router-dom';

const App: FunctionComponent = () => {
    const [order, setOrder] = useState<Order>(new Order());
    const [products, setProducts] = useState<Product[]>([]);
    const [force, setForce] = useState<number>(0);
    const categories: string[] = [...new Set(products.map((p) => p.category))];

    const addToOrder = (product: Product, quantity: number) => {
        setOrder((order) => {
            order.addProduct(product, quantity);
            return order;
        });
        setForce(force + 1);
    };

    useEffect(() => {
        const fetchData = async () => {
            await loadProducts(setProducts);
        };
        fetchData();
    }, []);

    const submitCallback = (routeProps: RouteComponentProps) => {
        storeOrder(order, (id) => routeProps.history.push(`/summary/${id}`));
    };

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
                    <Route
                        path='/order'
                        render={(props) => (
                            <OrderDetails
                                {...props}
                                order={order}
                                submitCallback={() => submitCallback(props)}
                            />
                        )}
                    />
                    <Route path='/summary/:id' component={Summary} />
                    <Redirect to='/products' />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;
