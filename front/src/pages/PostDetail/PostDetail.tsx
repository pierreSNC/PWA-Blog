import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetail: React.FC = () => {

    const  { id } = useParams<any>();
    return (
        <div>
            <h2>Posts number {id}</h2>
        </div>
    );
};

export default PostDetail;