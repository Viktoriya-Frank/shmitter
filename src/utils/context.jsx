import {createContext, useState} from "react";


export const TwitterContext = createContext();

export const TwitterProvider = ({children}) => {

    const [stats, setStats] = useState({
        followers: 1000,
        following: 200
    });

    const changeStats = (type, value) => {
        setStats(prevStats => ({
            ...prevStats,
            [type]: Math.max(0, prevStats[type] + value)
        }));
    };

    return (
        <TwitterContext.Provider value={{stats, changeStats}}>
            {children}
        </TwitterContext.Provider>
    );
};
