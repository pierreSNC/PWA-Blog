import React from 'react';
import './Title.scss';

const Title: React.FC = () => {
    return (
        <div className={'title flex flex-col space-y-2'}>
            <p>Blog</p>
            <h1 className={'text-2xl sm:text-4xl md:text-5xl lg:text-6xl w-full sm:w-11/12 md:w-3/4 xl:w-1/2'}>Stay Informed and Inspired with Ddsgnr News</h1>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
        </div>
    );
};

export default Title;