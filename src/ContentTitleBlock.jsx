// todo: figure out why importing this from here is causing
// "You should not use <Link> outside a <Router>" errors

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ContentTitleBlock({ title, subtitle, destination, ariaLabel }) {
  return (
    <Link
      className='content-title-block'
      to={destination}
      aria-label={ariaLabel}
    >
      <span className="d-block small m-0">{subtitle}</span>
      <span className="d-block m-0 font-weight-bold">{title}</span>
    </Link>
  );
}

ContentTitleBlock.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  destination: PropTypes.string,
  ariaLabel: PropTypes.string,
};

export default ContentTitleBlock;