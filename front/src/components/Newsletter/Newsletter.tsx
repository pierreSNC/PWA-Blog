import React from 'react';
import Button from "../Button/Button";
import './Newsletter.scss';

const Newsletter: React.FC = () => {

    const background = process.env.PUBLIC_URL + '/img/newsletter.png';


    return (
        <section className={'newsletter !px-[40px] flex flex-col items-center justify-between gap-y-8 lg:gap-y-12 lg:flex-row lg:!px-[40px] xl:!px-[64px]'} style={{ backgroundImage: `url(${background })` }}>
            <div className={'flex flex-col justify-between'}>
                <h3 className={'text-2xl sm:text-3xl md:text-4xl lg:text-3xl mb-4'}>Sign up for our newsletter</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
            <div>
                <div className={'flex flex-col gap-y-4 sm:flex-row gap-x-4 justify-center lg:justify-end mb-4'}>
                    <input type="text" placeholder={'Enter your email'}/>
                    <Button content={'Subscribe'} filled={true} />
                </div>
                <div className={'lg:text-right'}>
                    <p>By clicking Sign Up you're confirming that you agree with our Terms and Conditions.</p>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;