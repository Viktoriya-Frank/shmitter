import React, {useContext} from 'react';
import {TwitterContext} from "../utils/context.jsx";

const Avatar = ({size}) => {
    const {user, changeAvatar, changeName} = useContext(TwitterContext);
    return (
        <img
            onClick={() => {
                const url = prompt("Enter Avatar URL");
                changeAvatar(url);
            }}
            onContextMenu={e => {
                e.preventDefault();
                const name = prompt("Enter User Name");
                changeName(name);
            }}
            className={`user-avatar ${size || ''}`}
            src={user.avatar} alt={user.name}
        />
    );
};

export default Avatar;