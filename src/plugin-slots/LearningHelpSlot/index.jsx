import React from 'react';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import { LearningHeaderHelpLink } from '../../learning-header/LearningHeader';

const LearningHelpSlot = () => (
  <PluginSlot id="learning_help_slot">
    <LearningHeaderHelpLink />
  </PluginSlot>
);

export default LearningHelpSlot;