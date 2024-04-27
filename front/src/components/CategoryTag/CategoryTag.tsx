import React from 'react';
import './CategoryTag.scss';

interface CategoryTagProps {
    content: string;
}

const CategoryTag: React.FC<CategoryTagProps> = ({ content }) => {
    return (
        <div className="category__tag">
            <span>{content}</span>
        </div>
    );
};

export default CategoryTag;
