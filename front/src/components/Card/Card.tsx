import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Card.scss';
import CategoryTag from "../CategoryTag/CategoryTag";
import Button from "../Button/Button";

interface CardProps {
    id: number
    thumbnail: string,
    category: string,
    title: string,
    excerpt: string,
    time_read: string
}

const Card: React.FC<CardProps> = ({id, thumbnail, category, title, excerpt, time_read}) => {

    const navigate = useNavigate();

    const handleClick = (id: number) => {
        console.log('Button clicked!');
        navigate(`/post/${id}`);
    };

    return (
        <article className={'card flex flex-col space-y-4'}>
            <div className={'h-[300px]'}>
                <img src={thumbnail} alt="" className={'rounded-md object-cover h-full w-full'}/>
            </div>
            <div className={'flex items-center gap-x-4'}>
                <CategoryTag content={category} />
                <span className={'font-semibold'}>{time_read} min read</span>
            </div>
            <div>
                <h3>{title}</h3>
                <p>{excerpt}</p>
            </div>
            <div>
                <Button content={'Read more'} icon={true} filled={false} onClick={() => handleClick(id)} />
            </div>
        </article>
    );
};

export default Card;