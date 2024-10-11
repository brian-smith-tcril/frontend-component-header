import React from 'react';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import { MobileHeaderMainMenu, mobileHeaderMainOrSecondaryMenuPropTypes } from '../../MobileHeader';

const MobileMainMenuSlot = ({
  menu
}) => (
  <PluginSlot
    id="mobile_main_menu_slot"
    slotOptions={{
      mergeProps: true,
    }}
  >
    <MobileHeaderMainMenu menu={menu} />
  </PluginSlot>
);

MobileMainMenuSlot.propTypes = {
  menu: mobileHeaderMainOrSecondaryMenuPropTypes,
};

export default MobileMainMenuSlot;
