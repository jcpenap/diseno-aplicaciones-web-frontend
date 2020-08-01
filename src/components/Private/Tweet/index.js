import React from 'react';

const Tweet = (props) => {

    return (
        <>
            <p>{props.tweet.content}</p>
            <p>@{props.tweet.user.username}</p>
            <p>comments {props.tweet.comments.length}</p> 
            <p>{props.tweet.createdAt}</p> 
            <hr />
        </>
    );
}

export default Tweet;