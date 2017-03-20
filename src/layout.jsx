import React, { PropTypes } from 'react';
import './stylesheets/common.scss';

import AltText from './components/alt.text.jsx';


const Layout = (props) => {
  return (
    <div className='wrapper'>
      <Header />
      <main id='main' className='wrap page' role='main'>
        {props.children}
      </main>
      <Footer />
    </div>
  );
};

// validation rules
Layout.propTypes = {
  children: PropTypes.object.isRequired
};

export default Layout;



const Header = (props) => {
  return (
    <header id='header' className='header' role='banner'>
      <AltText normal="Hello" modified="World" />
    </header>
  );
};

const Footer = (props) => {
  return (
    <footer id='footer' className='footer' role='contentinfo'>

    </footer>
  );
};