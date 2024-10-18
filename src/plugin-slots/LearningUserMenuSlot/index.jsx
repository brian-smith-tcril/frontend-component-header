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

export const learningHeaderUserMenuDataShape = PropTypes.shape({
  items: PropTypes.arrayOf(PropTypes.shape({
    message: PropTypes.string,
    href: PropTypes.string,
  })),
});

LearningUserMenuSlot.propTypes = learningHeaderUserMenuDataShape;

export default LearningUserMenuSlot;
