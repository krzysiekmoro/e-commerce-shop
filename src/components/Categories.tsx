import React, { FunctionComponent } from 'react';
import { CategoriesWrapper } from '../styles/categories.styles';
import { Button } from '../styles/header.styles';

interface Props {
    selected: string;
    categories: string[];
    selectCategory: (category: string) => void;
}

export const Categories: FunctionComponent<Props> = (props) => {
    return (
        <CategoriesWrapper>
            {['All', ...props.categories].map((c) => {
                let btnClass = props.selected === c ? '' : '';
                return (
                    <Button
                        key={c}
                        onClick={() => props.selectCategory(c)}
                        className={`${btnClass}`}
                    >
                        {c.toUpperCase()}
                    </Button>
                );
            })}
        </CategoriesWrapper>
    );
};
