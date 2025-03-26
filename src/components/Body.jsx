import React from 'react';
import Content from "./Content.jsx";
import Sidebar from "./Sidebar.jsx";

const Body = ({user, stats}) => {
    return (
        <div className={`body`}>
            <Sidebar />
            <Content/>
        </div>
    );
};

export default Body;