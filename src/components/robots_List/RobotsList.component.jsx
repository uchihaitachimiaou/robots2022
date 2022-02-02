import React from 'react';
import RobotCard from '../robot_card/RobotCard.component';

const RobotsList =({filteredRobotsList})=> {
    /* must check why i need to call filteredRobotsList() instead of having an array at disposal (?)
        as below with:
        const RobotsList =({monsters})=> {
            let robots = monsters.map(robot => { code here }
        }
    */
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