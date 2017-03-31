import React from 'react';
import { render } from 'react-dom';

import Layout from './layout';
import InfoPanel from './components/info.panel';
import List from './components/list';
import SkiDayList from './components/ski.day.list';
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
        <SkiDayList days={
          [
            {
              resort: 'Squaw Valley',
              date: new Date('1-Jan-2017'),
              powder: true,
              backcountry: false
            },
            {
              resort: 'Krikwood',
              date: new Date('28-Mar-2017'),
              powder: false,
              backcountry: false
            },
            {
              resort: 'Mt. Tallac',
              date: new Date('2-Apr-2017'),
              powder: false,
              backcountry: true
            },
          ]
        } />
      </nav>

    </Layout>
  );
};

render(<App />, document.getElementById('react-container'));
