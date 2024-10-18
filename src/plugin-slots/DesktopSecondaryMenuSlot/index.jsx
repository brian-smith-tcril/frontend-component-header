import React from 'react';
import PropTypes from 'prop-types';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import { DesktopHeaderMainOrSecondaryMenu } from '../../DesktopHeader';
import { desktopHeaderMainOrSecondaryMenuDataShape } from '../DesktopMainMenuSlot';

const DesktopSecondaryMenuSlot = ({
  menu
}) => (
  <PluginSlot
    id="desktop_secondary_menu_slot"
    slotOptions={{
      mergeProps: true,
    }}
  >
    <DesktopHeaderMainOrSecondaryMenu menu={menu} />
  </PluginSlot>
);

DesktopSecondaryMenuSlot.propTypes = {
  menu: desktopHeaderMainOrSecondaryMenuDataShape,
};

export default DesktopSecondaryMenuSlot;
