import Axios from 'axios'
import { Product, Order } from './handleOrder'

const protocol = 'http'
const hostname = 'localhost'
const port = 4600

const urls = {
    products: `${protocol}://${hostname}:${port}/products`,
    orders: `${protocol}://${hostname}:${port}/orders`
}

export const loadProducts = async (callback: (products: Product[]) => void): Promise<void> => {
    await Axios.get(urls.products).then(res => callback(res.data))
}

export const storeOrder = async (order: Order, callback: (id: number) => void): Promise<void> => {
    let orderData = {
        lines: [...order.orderLines.values()].map(line => ({
            productId: line.product.id,
            productName: line.product.name,
            quantity: line.quantity
        }))
    }
    await Axios.post(urls.orders, orderData).then(res => callback(res.data.id))
}
