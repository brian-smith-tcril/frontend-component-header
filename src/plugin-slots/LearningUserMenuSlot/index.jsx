import React from 'react';
import PropTypes from 'prop-types';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import { LearningHeaderUserMenuItems } from '../../learning-header/AuthenticatedUserDropdown';

const LearningUserMenuSlot = ({
  items
}) => (
  <PluginSlot
    id="learning_user_menu_slot"
    slotOptions={{
      mergeProps: true,
    }}
  >
    <LearningHeaderUserMenuItems items={items} />
  </PluginSlot>
);

// LogoSlot.propTypes = {
//   href: PropTypes.string.isRequired,
//   src: PropTypes.string.isRequired,
//   alt: PropTypes.string.isRequired,
// };

export default LearningUserMenuSlot;
