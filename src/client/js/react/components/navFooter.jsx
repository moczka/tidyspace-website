import React from 'react';
import PropTypes from 'prop-types';
import data from '_data/rawData';
import './navFooter.scss';

const NavFooter = props => {
  return (
    <section>
      <ol>
        <li>Copyright Reserved 2019</li>
        <li>Contact Us</li>
      </ol>
    </section>
  );
};

NavFooter.propTypes = {
};

export default NavFooter;