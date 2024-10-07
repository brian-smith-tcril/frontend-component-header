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

// LogoSlot.propTypes = {
//   href: PropTypes.string.isRequired,
//   src: PropTypes.string.isRequired,
//   alt: PropTypes.string.isRequired,
// };

export default MobileLoggedOutItemsSlot;
