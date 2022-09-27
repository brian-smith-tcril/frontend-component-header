import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { AppContext } from '@edx/frontend-platform/react';
import { APP_CONFIG_INITIALIZED, ensureConfig, mergeConfig, subscribe } from '@edx/frontend-platform';
import DesktopHeader from './DesktopHeader';
import messages from './Header.messages';
ensureConfig(['STUDIO_BASE_URL', 'LOGOUT_URL', 'LOGIN_URL', 'SITE_NAME', 'LOGO_URL', 'ORDER_HISTORY_URL'], 'StudioHeader component');
subscribe(APP_CONFIG_INITIALIZED, function () {
  mergeConfig({
    AUTHN_MINIMAL_HEADER: !!process.env.AUTHN_MINIMAL_HEADER
  }, 'StudioHeader additional config');
});

function StudioHeader(_ref) {
  var intl = _ref.intl,
      contentTitle = _ref.contentTitle,
      contentSubtitle = _ref.contentSubtitle,
      actionRowContent = _ref.actionRowContent;

  var _useContext = useContext(AppContext),
      authenticatedUser = _useContext.authenticatedUser,
      config = _useContext.config;

  var userMenu = authenticatedUser === null ? [] : [{
    type: 'item',
    href: "".concat(config.STUDIO_BASE_URL),
    content: intl.formatMessage(messages['header.user.menu.studio.home'])
  }, {
    type: 'item',
    href: "".concat(config.STUDIO_BASE_URL, "/maintenance"),
    content: intl.formatMessage(messages['header.user.menu.studio.maintenance'])
  }, {
    type: 'item',
    href: config.LOGOUT_URL,
    content: intl.formatMessage(messages['header.user.menu.logout'])
  }];
  var props = {
    logo: config.LOGO_URL,
    logoAltText: config.SITE_NAME,
    logoDestination: config.STUDIO_BASE_URL,
    loggedIn: authenticatedUser !== null,
    username: authenticatedUser !== null ? authenticatedUser.username : null,
    avatar: authenticatedUser !== null ? authenticatedUser.avatar : null,
    actionRowContent: actionRowContent,
    userMenu: userMenu,
    loggedOutItems: []
  };
  return /*#__PURE__*/React.createElement(DesktopHeader, props);
}

StudioHeader.propTypes = {
  intl: intlShape.isRequired,
  actionRowContent: PropTypes.element
};
StudioHeader.defaultProps = {
  actionRowContent: null
};
export default injectIntl(StudioHeader);
//# sourceMappingURL=StudioHeader.js.map