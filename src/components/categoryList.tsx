import React, { FunctionComponent } from 'react';

interface Props {
    selected: string;
    categories: string[];
    selectCategory: (category: string) => void;
}

export const CategoryList: FunctionComponent<Props> = (props) => {
    return (
        <div>
            {['All', ...props.categories].map((c) => {
                let btnClass = props.selected === c ? '' : '';
                return (
                    <button
                        key={c}
                        onClick={() => props.selectCategory(c)}
                        className={`${btnClass}`}
                    >
                        {c}
                    </button>
                );
            })}
        </div>
    );
};
