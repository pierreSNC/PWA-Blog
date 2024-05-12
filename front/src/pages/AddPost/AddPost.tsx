import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import './AddPost.scss';

const AddPost: React.FC = () => {
    const [authors, setAuthors] = useState<any[]>([]);
    const [categories, setCategories] = useState<any[]>([]);
    const [title, setTitle] = useState('');
    const [authorId, setAuthorId] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [excerpt, setExcerpt] = useState('');
    const [timeRead, setTimeRead] = useState('');

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}authors`).then(res => {
            setAuthors(res.data);
        });

        axios.get(`${process.env.REACT_APP_API_URL}categories`).then(res => {
            setCategories(res.data);
        });
    }, []);

    const handleChangeAuthor = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setAuthorId(event.target.value);
    };

    const handleChangeCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCategoryId(event.target.value);
    };

    const handleChangeExcerpt = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setExcerpt(event.target.value);
    };

    const handleChangeTimeRead = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTimeRead(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const postData = {
            title: title,
            id_author : authorId,
            id_category: categoryId,
            excerpt: excerpt,
            time_read: timeRead,
            thumbnail: "https://via.placeholder.com/1000",
            is_popular: false

        };
        axios.post(`${process.env.REACT_APP_API_URL}post`, postData)
            .then(response => {
                console.log('Post added successfully:', response.data);
                setTitle('');
                setAuthorId('');
                setCategoryId('');
                setExcerpt('');
                setTimeRead('');
            })
            .catch(error => {
                console.error('Error adding post:', error);
            });
    };

    return (
        <div>
            <Header />
            <section className={'mt-[150px] mb-[70px]'} id={'add__post'}>
                <h2 className={'text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8'}>Add a new post!</h2>
                <form onSubmit={handleSubmit} className={'w-3/4 mx-auto'}>
                    <div className="flex max-lg:flex-col items-start mb-4">
                        <label htmlFor="title" className="w-1/2">Title:</label>
                        <input type="text" placeholder="Enter a title" id="title" className="w-full lg:w-3/4" onChange={(e) => setTitle(e.target.value)} value={title}/>
                    </div>
                    <div className="flex max-lg:flex-col items-start mb-4">
                        <label htmlFor="authors" className="w-1/2">Author:</label>
                        <select name="authors" id="authors" className="w-full lg:w-3/4" onChange={handleChangeAuthor} value={authorId}>
                            <option value="">--Please choose an author--</option>
                            {authors.map((author) => (
                                <option key={author.id} value={author.id}>{author.firstname} {author.lastname}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex max-lg:flex-col items-start mb-4">
                        <label htmlFor="categories" className="w-1/2">Category:</label>
                        <select name="categories" id="categories" className="w-full lg:w-3/4" onChange={handleChangeCategory} value={categoryId}>
                            <option value="">--Please choose a category--</option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex max-lg:flex-col items-start mb-4">
                        <label htmlFor="excerpt" className="w-1/2">Excerpt:</label>
                        <textarea name="excerpt" id="excerpt" placeholder="Enter your excerpt" className="w-full lg:w-3/4" onChange={handleChangeExcerpt} value={excerpt}/>
                    </div>
                    <div className="flex max-lg:flex-col items-start mb-4">
                        <label htmlFor="time_read" className="w-1/2">Time to read (minutes):</label>
                        <input type="number" placeholder="Time read" id="time_read" className="w-3/4" onChange={handleChangeTimeRead} value={timeRead}/>
                    </div>
                    <Button content={"Submit"} filled={true} />
                </form>
            </section>
            <Footer />
        </div>
    );
};

export default AddPost;
