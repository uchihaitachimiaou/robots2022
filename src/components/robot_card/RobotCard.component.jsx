import React from 'react';

const RobotCard =({robotInfo})=> {
    return(
        <div>
            <h3>{robotInfo.name}</h3>
            <p>{`username: ${robotInfo.username}`}</p>
            <img src={`https://robohash.org/set_set1/${robotInfo.id}?size=200x200`} alt="" />
        </div>
    )
};

export default RobotCard;