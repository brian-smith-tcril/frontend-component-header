import React from 'react';
import PropTypes from 'prop-types';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import DesktopHeader from '../../DesktopHeader';

const DesktopHeaderSlot = ({
  props
}) => (
  <PluginSlot
    id="desktop_header_slot"
    slotOptions={{
      mergeProps: true,
    }}
  >
    <DesktopHeader {...props} />
  </PluginSlot>
);

// LogoSlot.propTypes = {
//   href: PropTypes.string.isRequired,
//   src: PropTypes.string.isRequired,
//   alt: PropTypes.string.isRequired,
// };

export default DesktopHeaderSlot;
