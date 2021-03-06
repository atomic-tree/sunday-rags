import React from 'react';
import { render } from 'react-dom';

import Layout from './layout';
import InfoPanel from './components/info.panel';
import List from './components/list';
import 'stylesheets/globals';

import bookmarks from './data/bookmarks';
import profile from './data/profile';


const App = () => {
  const { introduction, tagline } = profile.story;
  return (
    <Layout>
      <InfoPanel introduction={introduction} tagline={tagline} />
      <nav className='board-container'>
        <List id='my-profiles' title='My Profiles' data={bookmarks} />
      </nav>
    </Layout>
  );
};

render(<App />, document.getElementById('react-container'));
