import React from 'react';
import PropTypes from 'prop-types';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import Logo from '../../Logo';
var LogoSlot = function LogoSlot(_ref) {
  var href = _ref.href,
    src = _ref.src,
    alt = _ref.alt;
  return /*#__PURE__*/React.createElement(PluginSlot, {
    id: "linked_logo_slot"
  }, /*#__PURE__*/React.createElement(Logo, {
    content: {
      href: href,
      src: src,
      alt: alt
    }
  }));
};
LogoSlot.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};
export default LogoSlot;
//# sourceMappingURL=index.js.map