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

export const learningHeaderLoggedOutItemsDataShape = {
  buttonsInfo: PropTypes.arrayOf(PropTypes.shape({
    message: PropTypes.string,
    href: PropTypes.string,
    variant: PropTypes.string,
  })),
};

LearningLoggedOutItemsSlot.propTypes = learningHeaderLoggedOutItemsDataShape;

export default LearningLoggedOutItemsSlot;
