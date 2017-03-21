import React from 'react';
import { render } from 'react-dom';

import Layout from './layout';
import InfoPanel from './components/info.panel';
import List from './components/list';
import './stylesheets/globals';

import bookmarks from './data/bookmarks';
import profile from './data/profile';


const App = () => {
  return (
    <Layout>
      <InfoPanel {...profile} />
      <nav>
        <List id='my-profiles' title='My Profiles' data={bookmarks} />
      </nav>
    </Layout>
  );
};

render(<App />, document.getElementById('react-container'));
