import React from 'react';
import Stats from "./Stats.jsx";

const Sidebar = ({user, stats}) => {
    return (
        <div className={`sidebar`}>
            <Stats />
        </div>
    );
};

export default Sidebar;