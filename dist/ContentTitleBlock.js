// todo: figure out why importing this from here is causing
// "You should not use <Link> outside a <Router>" errors
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ContentTitleBlock(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      destination = _ref.destination,
      ariaLabel = _ref.ariaLabel;
  return /*#__PURE__*/React.createElement(Link, {
    className: "content-title-block",
    to: destination,
    "aria-label": ariaLabel
  }, /*#__PURE__*/React.createElement("span", {
    className: "d-block small m-0"
  }, subtitle), /*#__PURE__*/React.createElement("span", {
    className: "d-block m-0 font-weight-bold"
  }, title));
}

ContentTitleBlock.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  destination: PropTypes.string,
  ariaLabel: PropTypes.string
};
export default ContentTitleBlock;
//# sourceMappingURL=ContentTitleBlock.js.map