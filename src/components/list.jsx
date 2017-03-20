import React from 'react';
import Profile from './profile.jsx';
import '../stylesheets/list.scss';


const List = ({ id, title, data }) => {
  let actors = data.map((actor, i) => {
    return <Profile key={i} name={actor.title} link={actor.link} />;
  });

  return (
    <div className='list'>
      <h2 id={id}>{title}</h2>
      {actors}
    </div>
  );
};

export default List;
