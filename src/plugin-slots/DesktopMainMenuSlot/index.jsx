import React from 'react';
import PropTypes from 'prop-types';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import { DesktopHeaderMainMenu } from '../../DesktopHeader';

const DesktopMainMenuSlot = ({
  menu
}) => (
  <PluginSlot
    id="desktop_main_menu_slot"
    slotOptions={{
      mergeProps: true,
    }}
  >
    <DesktopHeaderMainMenu menu={menu} />
  </PluginSlot>
);

// LogoSlot.propTypes = {
//   href: PropTypes.string.isRequired,
//   src: PropTypes.string.isRequired,
//   alt: PropTypes.string.isRequired,
// };

export default DesktopMainMenuSlot;
