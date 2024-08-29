import PropTypes from 'prop-types';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import { LinkedLogo } from '../../Logo';
var LinkedLogoSlot = function LinkedLogoSlot(_ref) {
  var href = _ref.href,
    src = _ref.src,
    alt = _ref.alt;
  return /*#__PURE__*/React.createElement(PluginSlot, {
    id: "linked_logo_slot"
  }, /*#__PURE__*/React.createElement(LinkedLogo, {
    content: {
      href: href,
      src: src,
      alt: alt
    }
  }));
};
LinkedLogoSlot.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};
export default LinkedLogoSlot;
//# sourceMappingURL=index.js.map