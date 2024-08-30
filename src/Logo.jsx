import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ content }) => (
  <img src={content.src} alt={content.alt} className="logo" />
);

Logo.propTypes = {
  content: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  })
};

const LinkedLogo = ({ content }) => (
  <a href={content.href} className="logo">
    <img className="d-block" src={content.src} alt={content.alt} />
  </a>
);

LinkedLogo.propTypes = {
  content: PropTypes.shape({
    href: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  })
};

export { LinkedLogo, Logo };
export default Logo;
