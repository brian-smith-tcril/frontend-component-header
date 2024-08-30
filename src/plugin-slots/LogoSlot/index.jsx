import React from 'react';
import PropTypes from 'prop-types';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import { LinkedLogo } from '../../Logo';

const LogoSlot = ({ href, src, alt }) => (
  <PluginSlot id="linked_logo_slot">
    <LinkedLogo content={{ href, src, alt }} />
  </PluginSlot>
);

LogoSlot.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default LogoSlot;
