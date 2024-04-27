import React, {useEffect} from 'react';
import axios from 'axios';

interface HomeProps {

}

const Home: React.FC<HomeProps> = () => {

    useEffect(() => {
        axios.get('http://localhost:3000/posts')
            .then(res => {
                console.log(res.data)
            })
    }, [])

    return (
        <div>

        </div>
    );
};

export default Home;