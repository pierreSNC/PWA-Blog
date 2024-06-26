import React, {useEffect, useState} from 'react';
import Button from "../Button/Button";
import Card from "../Card/Card";
import axios from "axios";
import {Link} from "react-router-dom";

const Popular: React.FC = () => {
    const [posts, setPosts] = useState<any[]>([]);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}posts`)
            .then(async (res) => {
                const popularPosts = res.data.filter((post: any) => post.is_popular);

                // Création d'un tableau de promesses pour charger les détails de chaque catégorie
                const postsWithCategoryNames = await Promise.all(popularPosts.map(async (post: any) => {
                    if (post.id_category) {
                        // Récupérer les détails de la catégorie pour chaque post
                        const categoryRes = await axios.get(`${process.env.REACT_APP_API_URL}category/${post.id_category}`);
                        return {
                            ...post,
                            categoryName: categoryRes.data.name
                        };
                    }
                    return post; // Retourner le post tel quel s'il n'a pas d'id_category
                }));

                setPosts(postsWithCategoryNames);
            })
            .catch(error => console.error('Error fetching posts:', error));
    }, []);
    return (
        <section className={'mx-[50px] my-[112px]'}>
            <div className={'flex flex-col gap-y-8 items-start md:flex-row md:items-end justify-between mb-[80px]'}>
                <div>
                    <h2 className={'font-bold mb-2 md:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl'}>Popular</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
                <Link to={'/popular'} >
                    <Button content={'View all'} filled={true} />
                </Link>
            </div>
            <div className={'grid grid-rows-6 grid-cols-1 md:grid-rows-3 md:grid-cols-2 xl:grid-rows-2 xl:grid-cols-3 gap-x-12 gap-y-16'}>
                {posts ? posts.map(post => (
                    <div key={post.id}>
                        <Card
                            id={post.id}
                            thumbnail={post.thumbnail}
                            category={post.categoryName}
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