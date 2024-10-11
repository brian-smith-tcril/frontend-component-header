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

// LogoSlot.propTypes = {
//   href: PropTypes.string.isRequired,
//   src: PropTypes.string.isRequired,
//   alt: PropTypes.string.isRequired,
// };

export default MobileUserMenuSlot;
