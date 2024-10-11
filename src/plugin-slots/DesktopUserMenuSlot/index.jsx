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

// LogoSlot.propTypes = {
//   href: PropTypes.string.isRequired,
//   src: PropTypes.string.isRequired,
//   alt: PropTypes.string.isRequired,
// };

export default DesktopUserMenuSlot;
