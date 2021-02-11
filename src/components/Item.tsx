import React, { FunctionComponent, useState } from 'react';
import { Product } from '../data/handleOrder';
import { ItemWrapper } from '../styles/item.styles';

interface Props {
    product: Product;
}

enum CardState {
    isCollapsed = 'is-collapsed',
    isExpanded = 'is-expanded',
}

export const Item: FunctionComponent<Props> = (props) => {
    const [cardState, setCardState] = useState(CardState.isCollapsed);

    const handleExpand = () => {
        if (cardState === CardState.isCollapsed)
            setCardState(CardState.isExpanded);
        else setCardState(CardState.isCollapsed);
    };

    return (
        <ItemWrapper onClick={() => handleExpand()} className={cardState}>
            <div className='card-content'>
                <div id='image-wrapper'>
                    <img alt='one of the products' src={props.product.image} />
                </div>
                <div>
                    <h3>{props.product.title}</h3>
                    <p>${props.product.price.toFixed(2)}</p>
                </div>
            </div>
            <div className={`expander`}>Expander</div>
        </ItemWrapper>
    );
};
