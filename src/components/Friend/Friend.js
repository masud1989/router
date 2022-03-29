import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const {name, username, email, id} = props.friend;

    const navigate = useNavigate();

    const showFriendDetails = () => {
       const path = `/friend/${id}`;
       navigate(path);
    }
    return (
        <div>
            <h3>Name:{name}</h3>
            <h4>E-mail:{email}</h4>
            <button onClick={showFriendDetails}>{username} ID:{id}</button>
        </div>
    );
};

export default Friend;