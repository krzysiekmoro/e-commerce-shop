import React, { FunctionComponent, useState } from 'react';
import { Product, Order } from './data/handleOrder';
import { ProductsList } from './components/ProductsList';
import { Cart } from './components/Cart';
import { Summary } from './components/Summary';
import { storeOrder } from './data/dataHandler';
import { useQuery } from 'react-query';
import {
    Switch,
    Route,
    Redirect,
    BrowserRouter,
    RouteComponentProps,
} from 'react-router-dom';
import { ItemDetails } from './components/ItemDetails';

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

    const { isLoading } = useQuery('storeData', () =>
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((json) => setProducts(json))
    );

    const submitCallback = (routeProps: RouteComponentProps) => {
        storeOrder(order, (id) => routeProps.history.push(`/summary/${id}`));
    };

    return (
        <BrowserRouter>
            <Switch>
                <Route
                    path='/products'
                    render={(props) => (
                        <ProductsList
                            {...props}
                            products={products}
                            categories={categories}
                            order={order}
                            isLoading={isLoading}
                            submitCallback={() => submitCallback(props)}
                        />
                    )}
                />
                <Route path='/details/:id'>
                    <ItemDetails products={products} callback={addToOrder} />
                </Route>
                <Route
                    path='/order'
                    render={(props) => (
                        <Cart
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
    );
};

export default App;
