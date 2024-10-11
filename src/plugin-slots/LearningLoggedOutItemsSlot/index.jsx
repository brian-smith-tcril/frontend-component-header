import React from 'react';
import PropTypes from 'prop-types';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import { DesktopLoggedOutItems } from '../../DesktopHeader';

const LearningLoggedOutItemsSlot = ({
  items
}) => (
  <PluginSlot
    id="learning_logged_out_items_slot"
    slotOptions={{
      mergeProps: true,
    }}
  >
    <DesktopLoggedOutItems items={items} />
  </PluginSlot>
);

// LogoSlot.propTypes = {
//   href: PropTypes.string.isRequired,
//   src: PropTypes.string.isRequired,
//   alt: PropTypes.string.isRequired,
// };

export default LearningLoggedOutItemsSlot;
