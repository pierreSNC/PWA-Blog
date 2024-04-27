import React from 'react';
import './Card.scss';
import CategoryTag from "../CategoryTag/CategoryTag";
import Button from "../Button/Button";

interface CardProps {
    thumbnail: string,
    category: string,
    title: string,
    excerpt: string,
    time_read: string
}

const Card: React.FC<CardProps> = ({thumbnail, category, title, excerpt, time_read}) => {
    return (
        <article className={'card flex flex-col space-y-4'}>
            <div>
                <img src={thumbnail} alt="" className={'rounded-md'}/>
            </div>
            <div className={'flex items-center gap-x-4'}>
                <CategoryTag content={category} />
                <span>{time_read} min read</span>
            </div>
            <div>
                <h3>{title}</h3>
                <p>{excerpt}</p>
            </div>
            <div>
                <Button content={'Read more'} icon={true} filled={false} />
            </div>
        </article>
    );
};

export default Card;