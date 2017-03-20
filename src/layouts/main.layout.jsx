import React, { PropTypes } from 'react';
import '../stylesheets/common.scss';


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

const MainLayout = (props) => {
  return (
    <div className='wrapper'>
      <Header />
      <main id='main' className='page wrap' role='main'>
        {props.children}
      </main>
      <Footer />
    </div>
  );
};

// validation rules
MainLayout.propTypes = {
  children: PropTypes.object.isRequired
};

export default MainLayout;