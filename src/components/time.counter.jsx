import React from 'react';
import Terrain from 'react-icons/lib/md/terrain';
import SnowFlake from 'react-icons/lib/ti/weather-snow';
import Calendar from 'react-icons/lib/fa/calendar';


const percentToDecimal = (decimal) => {
  return ((decimal * 100) + '%');
};

const calcGoalProgress = (total, goal) => {
  return percentToDecimal(total / goal);
};

const TimeCounter = ({ total = 70, powder = 35, backcountry = 10, goal = 75 }) => {
  return (
    <div className="time-counter">
      <div className="total-days">
        <span>{total}</span>
        <Calendar />
        <span>days</span>
      </div>
      <div className="powder-days">
        <span>{powder}</span>
        <SnowFlake />
        <span>days</span>
      </div>
      <div className="backcountry-days">
        <span>{backcountry}</span>
        <Terrain />
        <span>days</span>
      </div>
      <div>
        <span>
          {calcGoalProgress(total, goal)}
        </span>
      </div>
    </div>
  );
};

// TimeCounter.defaultProps = {
//   total: 50,
//   powder: 50,
//   backcountry: 15,
//   goal: 100
// };

export default TimeCounter;