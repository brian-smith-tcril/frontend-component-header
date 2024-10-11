import React from 'react';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import { MobileLoggedOutItems, mobileHeaderLoggedOutItemsPropTypes } from '../../MobileHeader';

const MobileLoggedOutItemsSlot = ({
  items
}) => (
  <PluginSlot
    id="mobile_logged_out_items_slot"
    slotOptions={{
      mergeProps: true,
    }}
  >
    <MobileLoggedOutItems items={items} />
  </PluginSlot>
);

MobileLoggedOutItemsSlot.propTypes = {
  items: mobileHeaderLoggedOutItemsPropTypes,
};

export default MobileLoggedOutItemsSlot;
