import React from 'react';
import PropTypes from 'prop-types';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import { Logo } from '../../Logo';
var LogoSlot = function LogoSlot(_ref) {
  var src = _ref.src,
    alt = _ref.alt;
  return /*#__PURE__*/React.createElement(PluginSlot, {
    id: "logo_slot"
  }, /*#__PURE__*/React.createElement(Logo, {
    content: {
      src: src,
      alt: alt
    }
  }));
};
LogoSlot.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};
export default LogoSlot;
//# sourceMappingURL=index.js.map