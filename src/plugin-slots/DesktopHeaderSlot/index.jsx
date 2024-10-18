import React from 'react';
import PropTypes from 'prop-types';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import DesktopHeader, { desktopHeaderDataShape } from '../../DesktopHeader';

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

DesktopHeaderSlot.propTypes = desktopHeaderDataShape;

export default DesktopHeaderSlot;
