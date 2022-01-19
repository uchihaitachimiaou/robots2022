import React from 'react';
import RobotCard from '../robot_card/RobotCard.component';

const RobotsList =({filteredRobotsList})=> {
let robots = filteredRobotsList().map(robot => {
    return(
        <div key={robot.id}>
            <RobotCard robotInfo={robot} />
        </div>
    )
});
    return (
        <div>
            <h1>Robots list</h1>
            <div>
                {robots}
            </div>
        </div>
    )
};

export default RobotsList;