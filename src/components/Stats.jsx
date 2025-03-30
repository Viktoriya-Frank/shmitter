import React, {useContext} from 'react';
import {TwitterContext} from "../utils/context.jsx";

const Stats = () => {
    const {user, stats, changeStats} = useContext(TwitterContext);

    return (
        <div className="user-stats">
            <div>
                <img src={user.avatar} alt="User Avatar"/>
                <p>{user.name}</p>
            </div>
            <div className="stats">
                <div
                    onClick={() => changeStats("followers", 1)}
                    onContextMenu={e => {
                        e.preventDefault();
                        changeStats("followers", -1);
                    }}
                >
                    Followers: {stats.followers}
                </div>
                <div
                    onClick={() => changeStats("following", 1)}
                    onContextMenu={e => {
                        e.preventDefault();
                        changeStats("following", -1);
                    }}
                >
                    Following: {stats.following}
                </div>
            </div>
        </div>
    );
};

export default Stats;
