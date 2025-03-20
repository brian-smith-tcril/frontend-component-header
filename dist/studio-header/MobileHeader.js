var _excluded = ["mainMenuDropdowns"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useToggle, ModalPopup } from '@openedx/paragon';
import HeaderBody from './HeaderBody';
import MobileMenu from './MobileMenu';
var MobileHeader = function MobileHeader(_ref) {
  var mainMenuDropdowns = _ref.mainMenuDropdowns,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useToggle = useToggle(false),
    _useToggle2 = _slicedToArray(_useToggle, 4),
    isOpen = _useToggle2[0],
    close = _useToggle2[2],
    toggle = _useToggle2[3];
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    target = _useState2[0],
    setTarget = _useState2[1];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeaderBody, _extends({}, props, {
    isMobile: true,
    setModalPopupTarget: setTarget,
    toggleModalPopup: toggle,
    isModalPopupOpen: isOpen
  })), /*#__PURE__*/React.createElement(ModalPopup, {
    hasArrow: true,
    placement: "bottom",
    positionRef: target,
    isOpen: isOpen,
    onClose: close,
    onEscapeKey: close,
    className: "mobile-menu-container"
  }, /*#__PURE__*/React.createElement(MobileMenu, {
    mainMenuDropdowns: mainMenuDropdowns
  })));
};
MobileHeader.propTypes = {
  studioBaseUrl: PropTypes.string.isRequired,
  // eslint-disable-line react/no-unused-prop-types
  logoutUrl: PropTypes.string.isRequired,
  // eslint-disable-line react/no-unused-prop-types
  number: PropTypes.string,
  // eslint-disable-line react/no-unused-prop-types
  org: PropTypes.string,
  // eslint-disable-line react/no-unused-prop-types
  title: PropTypes.string,
  // eslint-disable-line react/no-unused-prop-types
  logo: PropTypes.string,
  // eslint-disable-line react/no-unused-prop-types
  logoAltText: PropTypes.string,
  // eslint-disable-line react/no-unused-prop-types
  authenticatedUserAvatar: PropTypes.string,
  // eslint-disable-line react/no-unused-prop-types
  username: PropTypes.string,
  // eslint-disable-line react/no-unused-prop-types
  isAdmin: PropTypes.bool,
  // eslint-disable-line react/no-unused-prop-types
  mainMenuDropdowns: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    buttonTitle: PropTypes.node,
    items: PropTypes.arrayOf(PropTypes.shape({
      href: PropTypes.string,
      title: PropTypes.node
    }))
  })),
  outlineLink: PropTypes.string // eslint-disable-line react/no-unused-prop-types
};
MobileHeader.defaultProps = {
  logo: null,
  logoAltText: null,
  number: null,
  org: null,
  title: null,
  authenticatedUserAvatar: null,
  username: null,
  isAdmin: false,
  mainMenuDropdowns: [],
  outlineLink: null
};
export default MobileHeader;
//# sourceMappingURL=MobileHeader.js.map