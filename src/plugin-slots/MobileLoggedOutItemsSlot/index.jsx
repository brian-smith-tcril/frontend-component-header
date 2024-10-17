import React from 'react';
import PropTypes from 'prop-types';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import { MobileLoggedOutItems } from '../../MobileHeader';

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

export const mobileHeaderLoggedOutItemsDataShape = PropTypes.arrayOf(PropTypes.shape({
  type: PropTypes.oneOf(['item', 'menu']),
  href: PropTypes.string,
  content: PropTypes.string,
}));

MobileLoggedOutItemsSlot.propTypes = {
  items: mobileHeaderLoggedOutItemsDataShape,
};

export default MobileLoggedOutItemsSlot;
