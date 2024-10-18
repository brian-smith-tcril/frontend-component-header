import React from 'react';
import PropTypes from 'prop-types';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import { DesktopHeaderUserMenu } from '../../DesktopHeader';

const DesktopUserMenuSlot = ({
  menu
}) => (
  <PluginSlot
    id="desktop_user_menu_slot"
    slotOptions={{
      mergeProps: true,
    }}
  >
    <DesktopHeaderUserMenu menu={menu} />
  </PluginSlot>
);

export const desktopUserMenuDataShape = PropTypes.arrayOf(PropTypes.shape({
  heading: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.oneOf(['item', 'menu']),
    href: PropTypes.string,
    content: PropTypes.string,
    isActive: PropTypes.bool,
    onClick: PropTypes.func,
  })),
}));

DesktopUserMenuSlot.propTypes = {
  menu: desktopUserMenuDataShape,
}

export default DesktopUserMenuSlot;
