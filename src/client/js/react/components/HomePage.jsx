import React from 'react';
import PropTypes from 'prop-types';
import Image from '_library/Image/Image';
import Header from '_components/header';
import Footer from '_components/footer';
import data from '_data/rawData';
import './HomePage.scss';

const HomePage = props => {
  return (
    <div className="">
      <Header />
      <main>
        Main content goes here
      </main>
      <Footer />
    </div>
  );
};

HomePage.propTypes = {
  images: PropTypes.array
};

export default HomePage;