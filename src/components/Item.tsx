import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../data/handleOrder';
import { ItemWrapper, ImageWrapper, CardContent } from '../styles/item.styles';

interface Props {
    product: Product;
}

export const Item: FunctionComponent<Props> = (props) => {
    return (
        <ItemWrapper>
            <Link id='link' to={`/details/${props.product.id}`}>
                <CardContent>
                    <ImageWrapper>
                        <img
                            alt='one of the products'
                            src={props.product.image}
                        />
                    </ImageWrapper>
                    <div>
                        <h3>{props.product.title}</h3>
                        <p>${props.product.price.toFixed(2)}</p>
                    </div>
                </CardContent>
            </Link>
        </ItemWrapper>
    );
};
