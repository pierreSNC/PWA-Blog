import React, {useEffect, useState} from 'react';
import Button from "../Button/Button";
import Card from "../Card/Card";
import axios from "axios";

const Popular: React.FC = () => {
    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        axios.get('http://localhost:3000/posts')
            .then(res => {
                setPosts(res.data);
            })
    }, []);
    return (
        <section className={'mx-[50px] my-[112px]'}>
            <div className={'flex flex-col gap-y-8 items-start md:flex-row md:items-end justify-between mb-[80px]'}>
                <div>
                    <h2 className={'font-bold mb-2 md:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl'}>Popular</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
                <Button content={'View all'} filled={true} />
            </div>
            <div className={'grid grid-rows-6 grid-cols-1 md:grid-rows-3 md:grid-cols-2 xl:grid-rows-2 xl:grid-cols-3 gap-x-12 gap-y-16'}>
                {posts ? posts.map(post => (
                    <div key={post.id}>
                        <Card
                            id={post.id}
                            thumbnail={post.thumbnail}
                            category={post.id_category}
                            title={post.title}
                            excerpt={post.excerpt}
                            time_read={post.time_read}
                        />
                    </div>
                )) : ''}
            </div>
        </section>
    );
};

export default Popular;