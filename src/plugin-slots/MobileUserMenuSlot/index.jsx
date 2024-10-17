import React from 'react';
import PropTypes from 'prop-types';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import { MobileHeaderUserMenu } from '../../MobileHeader';

const MobileUserMenuSlot = ({
  menu
}) => (
  <PluginSlot
    id="mobile_user_menu_slot"
    slotOptions={{
      mergeProps: true,
    }}
  >
    <MobileHeaderUserMenu menu={menu} />
  </PluginSlot>
);

export const mobileHeaderUserMenuDataShape = PropTypes.arrayOf(PropTypes.shape({
  heading: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.oneOf(['item', 'menu']),
    href: PropTypes.string,
    content: PropTypes.string,
    isActive: PropTypes.bool,
    onClick: PropTypes.func,
  })),
}));

MobileUserMenuSlot.propTypes = {
  menu: mobileHeaderUserMenuDataShape,
}

export default MobileUserMenuSlot;
