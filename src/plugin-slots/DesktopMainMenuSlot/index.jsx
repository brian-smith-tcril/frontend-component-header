import React from 'react';
import PropTypes from 'prop-types';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import { DesktopHeaderMainOrSecondaryMenu } from '../../DesktopHeader';

const DesktopMainMenuSlot = ({
  menu
}) => (
  <PluginSlot
    id="desktop_main_menu_slot"
    slotOptions={{
      mergeProps: true,
    }}
  >
    <DesktopHeaderMainOrSecondaryMenu menu={menu} />
  </PluginSlot>
);

export const desktopHeaderMainOrSecondaryMenuDataShape = PropTypes.oneOfType([
  PropTypes.node,
  PropTypes.array,
]);

DesktopMainMenuSlot.propTypes = {
  menu: desktopHeaderMainOrSecondaryMenuDataShape,
};

export default DesktopMainMenuSlot;
