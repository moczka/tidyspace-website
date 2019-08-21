import React from 'react';
import PropTypes from 'prop-types';
import './navHeader.scss';
import data from '_data/rawData';

const NavigationHeader = props => {
  return (
    <section>
      <h1>Cleanest Home</h1>
      <nav>
        <ol>
          <li>Home</li>
          <li>Contact Us</li>
          <li>FAQ</li>
        </ol>
      </nav>
    </section>
  );
};

NavigationHeader.propTypes = {
};

export default NavigationHeader;