import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import Newsletter from "../../components/Newsletter/Newsletter";

const Home: React.FC = () => {

    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        axios.get('http://localhost:3000/posts')
            .then(res => {
                setPosts(res.data);
            })
    }, []);

    useEffect(() => {
        // console.log(posts);
    }, [posts]);

    return (

        <div>
            <Header />
            <Title />
            <Newsletter />
            <div>
                <section>
                    {posts ? posts.map(post => (
                        <div className={'m-4'} key={post.id}>
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
                </section>
            </div>
        </div>
    );
};

export default Home;