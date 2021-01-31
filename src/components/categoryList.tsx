import React, { FunctionComponent } from 'react';

interface Props {
    selected: string;
    categories: string[];
    selectCategory: (category: string) => void;
}

export const CategoryList: FunctionComponent<Props> = (props) => {
    return (
        <div className='flex flex-col origin-top-left absolute left-0 mx-4 shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
            {['All', ...props.categories].map((c) => {
                let btnClass =
                    props.selected === c ? 'btn-blue-chosen' : 'btn-blue';
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
