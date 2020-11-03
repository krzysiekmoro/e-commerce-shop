import React, { FunctionComponent } from 'react';

interface Props {
    selected: string;
    categories: string[];
    selectCategory: (category: string) => void;
}

export const CategoryList: FunctionComponent<Props> = (props) => {
    return (
        <div className='flex flex-col w-1/4'>
            {['All', ...props.categories].map((c) => {
                let btnClass =
                    props.selected === c
                        ? 'bg-blue-500 border-blue-600 hover:bg-blue-600'
                        : 'bg-blue-400 border-blue-500 hover:bg-blue-500';
                return (
                    <button
                        key={c}
                        onClick={() => props.selectCategory(c)}
                        className={`${btnClass} border rounded px-3 py-2 ml-4 mr-4 mt-2 mb-2 h-10`}
                    >
                        {c}
                    </button>
                );
            })}
        </div>
    );
};
