import React from 'react';
import PropTypes from 'prop-types';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import { Logo } from '../../Logo';

const LogoSlot = ({ src, alt }) => (
  <PluginSlot id="logo_slot">
    <Logo content={{ src, alt }} />
  </PluginSlot>
);

LogoSlot.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default LogoSlot;