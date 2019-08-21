import React from 'react';
import PropTypes from 'prop-types';
import data from '_data/rawData';
import './footer.scss';

const date = new Date();

const NavFooter = props => {
  return (
    <footer>
      <p>© Copyright {`${date.getFullYear()} - ${data.companyName}`}</p>
    </footer>
  );
};

NavFooter.propTypes = {
};

export default NavFooter;