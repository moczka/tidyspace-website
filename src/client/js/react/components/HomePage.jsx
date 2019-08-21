import React from 'react';
import PropTypes from 'prop-types';
import Image from '_library/Image/Image';
import NavigationHeader from '_components/navHeader';
import NavigationFooter from '_components/navFooter';
import data from '_data/rawData';
import './HomePage.scss';

const HomePage = props => {
  return (
    <div className="">
      <NavigationHeader />
      <main>
        Main content goes here
      </main>
      <NavigationFooter />
    </div>
  );
};

HomePage.propTypes = {
  images: PropTypes.array
};

export default HomePage;