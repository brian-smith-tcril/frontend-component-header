import React from 'react';
import PropTypes from 'prop-types';
var Logo = function Logo(_ref) {
  var content = _ref.content;
  return /*#__PURE__*/React.createElement("img", {
    src: content.src,
    alt: content.alt,
    className: "logo"
  });
};
Logo.propTypes = {
  content: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  })
};
var LinkedLogo = function LinkedLogo(_ref2) {
  var content = _ref2.content;
  return /*#__PURE__*/React.createElement("a", {
    href: content.href,
    className: "logo"
  }, /*#__PURE__*/React.createElement("img", {
    className: "d-block",
    src: content.src,
    alt: content.alt
  }));
};
LinkedLogo.propTypes = {
  content: PropTypes.shape({
    href: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  })
};
export { LinkedLogo, Logo };
export default Logo;
//# sourceMappingURL=Logo.js.map