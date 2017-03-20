import React from 'react';
import { render } from 'react-dom';
import List from './list.jsx';
import data from './data/profiles';

const App = () => {
  return (
    <div className='page'>
      <List id='actors' title='List of Actors' data={data} />
    </div>
  );
};

render(<App />, document.getElementById('react-container'));
