import React from 'react';
import { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

// import { useEffect, useState } from 'react/cjs/react.production.min';

const Friends = () => {
    const [friends, setFriends] = useState([]);
    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res=>res.json())
            .then(data=>setFriends(data))
    }, [])

    return (
        <div>
            <h2>This is friends page..</h2>
            <h3>Number of Ttotal Friends:{friends.length} </h3>
            {
                friends.map(friend=><Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    );
};

export default Friends;