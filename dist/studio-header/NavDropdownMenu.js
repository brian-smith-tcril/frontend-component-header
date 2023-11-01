import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useResolvedPath } from 'react-router-dom';
import { Dropdown, DropdownButton } from '@edx/paragon';
var NavDropdownItem = function NavDropdownItem(_ref) {
  var item = _ref.item;
  var navigate = useNavigate();
  var resolvedPath = useResolvedPath(item.href);
  return /*#__PURE__*/React.createElement(Dropdown.Item, {
    href: resolvedPath.pathname,
    onClick: function onClick(e) {
      e.preventDefault();
      navigate(resolvedPath.pathname);
    },
    className: "small"
  }, item.title);
};
NavDropdownItem.propTypes = {
  item: PropTypes.shape({
    href: PropTypes.string,
    title: PropTypes.string
  }).isRequired
};
var NavDropdownMenu = function NavDropdownMenu(_ref2) {
  var id = _ref2.id,
    buttonTitle = _ref2.buttonTitle,
    items = _ref2.items;
  return /*#__PURE__*/React.createElement(DropdownButton, {
    id: id,
    title: buttonTitle,
    variant: "tertiary"
  }, items.map(function (item) {
    return /^(?:\w+:)?\/\//.test(item.href) ? /*#__PURE__*/React.createElement(Dropdown.Item, {
      href: item.href,
      className: "small"
    }, item.title) : /*#__PURE__*/React.createElement(NavDropdownItem, {
      item: item
    });
  }));
};
NavDropdownMenu.propTypes = {
  id: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string,
    title: PropTypes.string
  })).isRequired
};
export default NavDropdownMenu;
//# sourceMappingURL=NavDropdownMenu.js.map