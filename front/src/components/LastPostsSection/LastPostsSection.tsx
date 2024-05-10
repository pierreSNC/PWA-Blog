import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTriangleExclamation} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import CategoryTag from "../CategoryTag/CategoryTag";
import Button from "../Button/Button";

const LastPostsSection: React.FC = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    const [lastPosts, setLastPosts] = useState<any>([]);

    useEffect(() => {
        const setOnline = () => setIsOnline(true);
        const setOffline = () => setIsOnline(false);

        window.addEventListener('online', setOnline);
        window.addEventListener('offline', setOffline);

        return () => {
            window.removeEventListener('online', setOnline);
            window.removeEventListener('offline', setOffline);
        };
    }, []);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}posts`).then(async res => {
            const lastFourPosts = res.data.slice(-4);
            const postsWithCategoryNames = await Promise.all(lastFourPosts.map(async (post: any) => {
                if (post.id_category) {
                    const categoryRes = await axios.get(`${process.env.REACT_APP_API_URL}category/${post.id_category}`);
                    return {
                        ...post,
                        categoryName: categoryRes.data.name
                    };
                }
                return post;
            }));
            setLastPosts(postsWithCategoryNames);
        });
    }, [])

    return (
        <section className={'mx-[50px] my-[112px]'}>
            {isOnline ? (
                <div>
                    <h2 className={'font-bold mb-2 md:mb-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl'}>Last Published Posts</h2>

                    <div className={'grid grid-cols-1 lg:grid-cols-2 grid-rows-5 lg:grid-rows-3 gap-[32px]'}>
                        {lastPosts ? lastPosts.map((post: any, index: number) => (

                            <div className={index === 0 ? ' row-span-2 lg:row-span-3' : 'flex'}>
                                {index === 0 ? (
                                    <article>
                                        <div>
                                            <img src={post.thumbnail} alt="" className={'w-full h-[400px] object-cover rounded-md'}/>
                                        </div>
                                        <div className={'flex gap-x-2 items-center my-2'}>
                                            <CategoryTag content={post.categoryName} />
                                            <span className={'font-semibold'}>{post.time_read} min</span>
                                        </div>
                                        <div>
                                            <h3 className={'font-bold text-[24px] mb-2'}>{post.title}</h3>
                                        </div>
                                        <div className={'mb-2'}>
                                            <p>{post.excerpt}</p>
                                        </div>
                                        <Button content={'Read more'} filled={false} icon={true} />
                                    </article>
                                ) : (
                                    <article className={'flex gap-x-4 items-center'}>
                                        <div>
                                            <img src={post.thumbnail} alt="" className={'h-[250px] w-[250px] object-cover rounded-md'}/>
                                        </div>
                                        <div className={'w-3/5'}>
                                            <div className={'flex gap-x-2 items-center mb-2'}>
                                                <CategoryTag content={post.categoryName} />
                                                <span className={'font-semibold'}>{post.time_read} min</span>
                                            </div>
                                            <h3 className={'font-bold text-[24px] mb-2'}>{post.title}</h3>
                                            <Button content={'Read more'} filled={false} icon={true} />
                                        </div>
                                    </article>
                                )}
                            </div>
                        )) : ''}
                    </div>
                </div>
            ): (
                <div className={'flex gap-x-4 items-center justify-center my-[150px]'}>
                    <FontAwesomeIcon icon={faTriangleExclamation} className={'text-xl sm:text-3xl'} />

                    <p>You cannot access the latest articles offline.</p>
                </div>
            )}
        </section>
    );
};

export default LastPostsSection;