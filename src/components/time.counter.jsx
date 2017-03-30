import React from 'react';

const percentToDecimal = (decimal) => {
  return ((decimal * 100) + '%');
};

const calcGoalProgress = (total, goal) => {
  return percentToDecimal(total / goal);
};

const TimeCounter = ({ total, powder, backcountry, goal }) => {
  return (
    <div className="time-counter">
      <div className="total-days">
        <span>{total}</span>
        <span>days</span>
      </div>
      <div className="powder-days">
        <span>{powder}</span>
        <span>days</span>
      </div>
      <div className="backcountry-days">
        <span>{backcountry}</span>
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

export default TimeCounter;