import React from 'react';
import PropTypes from 'prop-types';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import MobileHeader from '../../MobileHeader';

const MobileHeaderSlot = ({
  props
}) => (
  <PluginSlot
    id="mobile_header_slot"
    slotOptions={{
      mergeProps: true,
    }}
  >
    <MobileHeader {...props} />
  </PluginSlot>
);

// LogoSlot.propTypes = {
//   href: PropTypes.string.isRequired,
//   src: PropTypes.string.isRequired,
//   alt: PropTypes.string.isRequired,
// };

export default MobileHeaderSlot;
