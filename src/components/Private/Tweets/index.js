import React, { useState, useEffect } from 'react';
import Tweet from './../Tweet';

const Tweets = () => {
    const [tweets, setTweets] = useState([]);

    const getTweets = () => {
        const api = process.env.REACT_APP_API_URL;
        const url = `${api}/tweets`;
        fetch(url)
        .then(res=>res.json())
        .then(json=>{
            setTweets(json);
        })
    }

    useEffect(()=>{
        getTweets();
    },[]);

    return (
        <>
            <h2>Tweets</h2>
            {
                tweets ? 
                    tweets.map(tweet=>
                        <Tweet key={tweet._id} tweet={tweet} />
                    )
                : 
                    <p>No hay elementos</p>
            }
        </>
    );
}

export default Tweets;