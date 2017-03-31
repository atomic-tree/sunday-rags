import React from 'react';

import Terrain from 'react-icons/lib/md/terrain';
import SnowFlake from 'react-icons/lib/ti/weather-snow';
import Calendar from 'react-icons/lib/fa/calendar';

import SkiDayRow from './ski.day.row';


const SkiDayList = ({ days }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Resort</th>
          <th>Powder</th>
          <th>Backcountry</th>
        </tr>
      </thead>
      <tbody>
        {
          days.map((day, i) => {
            return <SkiDayRow key={i} {...day} />;
          })
        }
      </tbody>
    </table>
  );
};

export default SkiDayList;