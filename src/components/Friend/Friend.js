import React from 'react';

const Friend = (props) => {
    const {name, username, email} = props.friend;
    return (
        <div>
            <h3>Name:{name}</h3>
            <h4>E-mail:{email}</h4>
            <button>{username}</button>
        </div>
    );
};

export default Friend;