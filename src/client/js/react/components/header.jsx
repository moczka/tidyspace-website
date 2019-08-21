import React from 'react';
import PropTypes from 'prop-types';
import './header.scss';
import data from '_data/rawData';

const NavigationHeader = props => {
  return (
    <header>
      <h1>
        {data.companyName}
      </h1>
      <nav>
        <ol>
          {
            data.pages.map((page) => (
              <a key={page.url} href={page.url}>{page.name}</a>
            ))
          }
        </ol>
      </nav>
    </header>
  );
};

NavigationHeader.propTypes = {
};

export default NavigationHeader;