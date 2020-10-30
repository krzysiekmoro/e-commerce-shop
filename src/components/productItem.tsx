import React, { FunctionComponent, useState } from 'react'
import { Product } from '../data/handleOrder'

interface Props {
    product: Product,
    callback: (product: Product, quantity: number) => void
}

export const ProductItem: FunctionComponent<Props> = (props) => {
    
    const [quantity, setQuantity] = useState<number>(1)

    
    return <div>
        <h4>
            { props.product.name }
            <span>
                ${ props.product.price.toFixed(2) }
            </span>
        </h4>
        <div>
            { props.product.description }
            <button onClick={ () => props.callback(props.product, quantity) }>
                Add To Cart
            </button>
            <select onChange={ (e) => setQuantity(Number(e.target.value)) }>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
        </div>
    </div>
}