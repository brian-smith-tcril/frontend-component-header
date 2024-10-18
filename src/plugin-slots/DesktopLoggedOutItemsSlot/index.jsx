import React from 'react';
import PropTypes from 'prop-types';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import { DesktopLoggedOutItems } from '../../DesktopHeader';

const DesktopLoggedOutItemsSlot = ({
  items
}) => (
  <PluginSlot
    id="desktop_logged_out_items_slot"
    slotOptions={{
      mergeProps: true,
    }}
  >
    <DesktopLoggedOutItems items={items} />
  </PluginSlot>
);


export const desktopLoggedOutItemsDataShape = PropTypes.arrayOf(PropTypes.shape({
  type: PropTypes.oneOf(['item', 'menu']),
  href: PropTypes.string,
  content: PropTypes.string,
}));

DesktopLoggedOutItemsSlot.propTypes = {
  items: desktopLoggedOutItemsDataShape
}

export default DesktopLoggedOutItemsSlot;
