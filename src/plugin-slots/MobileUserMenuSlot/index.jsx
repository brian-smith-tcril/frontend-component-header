import React from 'react';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import { MobileHeaderUserMenu, mobileHeaderUserMenuPropTypes } from '../../MobileHeader';

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

MobileUserMenuSlot.propTypes = {
  menu: mobileHeaderUserMenuPropTypes,
}

export default MobileUserMenuSlot;
