import React from 'react';

import Profile from './profile.jsx';
import data from './data/profiles';
import './stylesheets/list.scss';

const List = ({ id, title }) => {
  let actors = data.map((actor, i) => {
    return <Profile key={i} name={actor.name} />;
  });

  return (
    <div className='list'>
      <h2 id={id}>{title}</h2>
      {actors}
    </div>
  );
};

export default List;
