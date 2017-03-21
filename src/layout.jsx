import React, { PropTypes } from 'react';
import 'stylesheets/globals';


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
  children: PropTypes.array.isRequired
};

export default Layout;



const Header = (props) => {
  return (
    <header id='header' className='header' role='banner'>

    </header>
  );
};

const Footer = (props) => {
  return (
    <footer id='footer' className='footer' role='contentinfo'>

    </footer>
  );
};