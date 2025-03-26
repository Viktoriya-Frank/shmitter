import React, {useContext} from 'react';
import {TwitterContext} from "../utils/context.jsx";

const Avatar = ({size}) => {
    const {user, setUser} = useContext(TwitterContext);


    const click = () => {
        const newAvatar = prompt('Please, enter URL of new avatar:', user.avatar);
        if(newAvatar && newAvatar !== user.avatar) {
            setUser(prevUser => ({...prevUser, avatar: newAvatar}));
        }
    }


    return (
        <img className={`user-avatar ${size ?? ''}`} src={user.avatar} alt={user.name} onClick={click} />
    );
};

export default Avatar;