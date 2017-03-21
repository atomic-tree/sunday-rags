import React from 'react';
import Profile from './profile';
import AltText from './alt.text';
import 'stylesheets/list';



const List = ({ id, title, data }) => {
  let actors = data.map((actor, i) => {
    return <Profile key={i} name={actor.title} link={actor.link} />;
  });

  return (
    <div className='list'>
      <h2 id={id}>
        <AltText normal={title} modified='Bookmarks' />
      </h2>
      {actors}
    </div>
  );
};

export default List;
