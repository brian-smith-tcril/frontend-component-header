import React from 'react';
import PropTypes from 'prop-types';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import { LearningLoggedOutButtons } from '../../learning-header/AnonymousUserMenu';

const LearningLoggedOutItemsSlot = ({
  buttonsInfo
}) => (
  <PluginSlot
    id="learning_logged_out_items_slot"
    slotOptions={{
      mergeProps: true,
    }}
  >
    <LearningLoggedOutButtons buttonsInfo={buttonsInfo} />
  </PluginSlot>
);

// LogoSlot.propTypes = {
//   href: PropTypes.string.isRequired,
//   src: PropTypes.string.isRequired,
//   alt: PropTypes.string.isRequired,
// };

export default LearningLoggedOutItemsSlot;
