import React from 'react';
import { render } from 'react-dom';

import Layout from './layout.jsx';
import List from './components/list.jsx';

import profiles from './data/profiles';
import './stylesheets/common.scss';


const App = () => {
  return (
    <Layout>
      <List id='my-profiles' title='My Profiles' data={profiles} />
    </Layout>
  );
};

render(<App />, document.getElementById('react-container'));
