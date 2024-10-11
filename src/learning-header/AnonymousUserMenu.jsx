import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { getLoginRedirectUrl } from '@edx/frontend-platform/auth';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { Button } from '@openedx/paragon';

import genericMessages from '../generic/messages';

const LoggedOutButtons = ({buttonsInfo}) => {
  return buttonsInfo.map((buttonInfo) => (
    <Button
      className='ml-3'
      variant={buttonInfo.variant ?? 'outline-primary'}
      href={buttonInfo.href}
    >
      {buttonInfo.message}
    </Button>
  ));
}

const AnonymousUserMenu = ({ intl }) => {
  const buttonsInfo = [
    {
      message: intl.formatMessage(genericMessages.registerSentenceCase),
      href: `${getConfig().LMS_BASE_URL}/register?next=${encodeURIComponent(global.location.href)}`
    },
    {
      message: intl.formatMessage(genericMessages.signInSentenceCase),
      href: getLoginRedirectUrl(global.location.href),
      variant: 'primary'
    }
  ];

  return (
    <div>
      <LoggedOutButtons buttonsInfo={buttonsInfo} />
    </div>
  )
};

AnonymousUserMenu.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(AnonymousUserMenu);
