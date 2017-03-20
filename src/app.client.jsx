import React from 'react';
import { render } from 'react-dom';

import MainLayout from './layouts/main.layout.jsx';
import List from './components/list.jsx';

import profiles from './data/profiles';
import './stylesheets/common.scss';


const App = () => {
  return (
    <MainLayout>
      <List id='my-profiles' title='My Profiles' data={profiles} />
    </MainLayout>
  );
};

render(<App />, document.getElementById('react-container'));
