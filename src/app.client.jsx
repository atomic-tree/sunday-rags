import React from 'react';
import { render } from 'react-dom';
import List from './list.jsx';

const App = () => {
  return (
    <div className='page'>
      <List id='actors' title='List of Actors' />
    </div>
  );
};

render(<App />, document.getElementById('react-container'));
