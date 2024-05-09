import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight, faShareFromSquare} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import {faInstagram, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";
import Newsletter from "../../components/Newsletter/Newsletter";
import CategoryTag from "../../components/CategoryTag/CategoryTag";

const PostDetail: React.FC = () => {

    const { id } = useParams<any>();
    const [post, setPost] = useState<any>([]);
    const [category, setCategory] = useState<any>([]);
    const [author, setAuthor] = useState<any>([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}post/${id}`)
            .then(res => {
                setPost(res.data);
                if (res.data.id_author) {
                    axios.get(`${process.env.REACT_APP_API_URL}author/${res.data.id_author}`)
                        .then(authorRes => {
                            setAuthor(authorRes.data);
                        });
                }
                if (res.data.id_category) {
                    axios.get(`${process.env.REACT_APP_API_URL}category/${res.data.id_category}`)
                        .then(categoryRes => {
                            setCategory(categoryRes.data);
                        });
                }
            });
    }, [id]);

    return (
        <div>
            <Header />
            <section className={'mt-[150px]'}>
                <div className="w-3/4 mx-auto">
                    <div className={'flex items-center gap-x-2 mb-8'}>
                        <span>Blog</span>
                        <FontAwesomeIcon icon={faChevronRight} />
                        <span className={'font-semibold'}>Current blog</span>
                    </div>
                    <h2 className={'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold'}>{post.title}</h2>
                    <div className={'flex flex-col sm:flex-row justify-between gap-y-4 mt-[48px]'}>
                        <div className={'flex flex-col sm:flex-row gap-x-4'}>
                            <div className={'h-[48px] w-[48px] rounded-full'}>
                                <img src={author.picture} alt="" className={'rounded-full h-full w-full object-cover'} />
                            </div>
                            <div>
                                <p className={'font-semibold'}>{author.firstname} {author.lastname}</p>
                                <div className={'flex gap-x-2 items-center'}>
                                    <span>{(author.createdAt)}</span>
                                    <span className={'h-[4px] w-[4px] rounded-full bg-black block'}></span>
                                    <span>{post.time_read} min read</span>
                                </div>
                            </div>
                        </div>
                        <div className={'flex gap-x-4 items-center'}>
                            <span className={'h-[32px] w-[32px] rounded-full bg-[#F4F4F4] flex justify-center items-center'}>
                                <FontAwesomeIcon icon={faShareFromSquare} className={'text-sm'} />
                            </span>
                                <span className={'h-[32px] w-[32px] rounded-full bg-[#F4F4F4] flex justify-center items-center'} >
                                <FontAwesomeIcon icon={faLinkedin} />
                            </span>
                                <span className={'h-[32px] w-[32px] rounded-full bg-[#F4F4F4] flex justify-center items-center'}>
                                <FontAwesomeIcon icon={faTwitter} />
                            </span>
                                <span className={'h-[32px] w-[32px] rounded-full bg-[#F4F4F4] flex justify-center items-center'}>
                                <FontAwesomeIcon icon={faInstagram} />
                            </span>
                        </div>
                    </div>
                </div>
                <div className={'my-[80px]'}>
                    <img src={post.thumbnail} alt="" className={'w-11/12 mx-auto h-[600px] rounded-md object-cover'}/>
                </div>
                <article className={'w-10/12 md:w-1/2 mx-auto'}>
                    <h2 className={'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold'}>Introduction</h2>
                    <p className={'my-8'}>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.</p>
                    <p>Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.</p>
                    <img src="https://via.placeholder.com/768x400" alt="" className={'rounded-md my-12'}/>
                    <p className={'font-bold'}>Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.</p>
                    <p className={'my-8'}>Collaboratively deploy intuitive partnerships whereas customized e-markets. Energistically maintain performance based strategic theme areas whereas just in time methodologies. Phosfluorescently drive functionalized intellectual capital and.</p>
                    <div className={''}>
                        <p className={'my-8 text-xl sm:text-2xl italic'}>
                            "Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus."
                        </p>
                    </div>
                    <p className={'my-8'}>Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum.</p>
                    <h2 className={'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold'}>Conclusion</h2>
                    <p className={'my-8'}>Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.</p>
                    <p className={'my-8'}>Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.</p>
                    <p className={'my-8'}>Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor. Nulla adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere cursus diam. </p>
                </article>
                <div className={'w-10/12 md:w-1/2 mx-auto'}>
                    <h3 className={'text-lg sm:text-xl font-bold mb-4'}>Share this post</h3>
                    <div className={'flex flex-col sm:flex-row gap-y-4 justify-between border-b-2 border-black pb-8 mb-8'}>
                        <div className={'flex gap-x-4 items-center'}>
                            <span className={'h-[32px] w-[32px] rounded-full bg-[#F4F4F4] flex justify-center items-center'}>
                                <FontAwesomeIcon icon={faShareFromSquare} className={'text-sm'} />
                            </span>
                            <span className={'h-[32px] w-[32px] rounded-full bg-[#F4F4F4] flex justify-center items-center'} >
                                <FontAwesomeIcon icon={faLinkedin} />
                            </span>
                            <span className={'h-[32px] w-[32px] rounded-full bg-[#F4F4F4] flex justify-center items-center'}>
                                <FontAwesomeIcon icon={faTwitter} />
                            </span>
                            <span className={'h-[32px] w-[32px] rounded-full bg-[#F4F4F4] flex justify-center items-center'}>
                                <FontAwesomeIcon icon={faInstagram} />
                            </span>
                        </div>
                        <CategoryTag content={category.name} />
                    </div>
                    <div className={'flex flex-col sm:flex-row gap-x-4 mb-16'}>
                        <div className={'h-[48px] w-[48px] rounded-full'}>
                            <img src={author.picture} alt="" className={'rounded-full h-full w-full object-cover'} />
                        </div>
                        <div>
                            <p className={'font-semibold'}>{author.firstname} {author.lastname}</p>
                            <div className={'flex gap-x-2 items-center'}>
                                <span>{(author.createdAt)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Newsletter />
            <Footer />
        </div>
    );
};

export default PostDetail;