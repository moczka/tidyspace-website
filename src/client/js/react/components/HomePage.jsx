import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Image from '_library/Image/Image';
import Header from '_components/header';
import Footer from '_components/footer';
import data from '_data/rawData';
import './homePage.scss';

const HomePage = props => {
  return (
    <Fragment>
      <Header />
      <main>
        Main content goes here
      </main>
      <Footer />
    </Fragment>
  );
};

HomePage.propTypes = {
  images: PropTypes.array
};

export default HomePage;