import React from 'react';
import PropTypes from 'prop-types';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import { MobileHeaderMainMenu } from '../../MobileHeader';

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

export const mobileHeaderMainMenuDataShape = PropTypes.oneOfType([
  PropTypes.node,
  PropTypes.array,
]);

MobileMainMenuSlot.propTypes = {
  menu: mobileHeaderMainMenuDataShape,
};

export default MobileMainMenuSlot;
