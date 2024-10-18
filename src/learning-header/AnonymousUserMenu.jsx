import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { getLoginRedirectUrl } from '@edx/frontend-platform/auth';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { Button } from '@openedx/paragon';
import LearningLoggedOutItemsSlot, { learningHeaderLoggedOutItemsDataShape } from '../plugin-slots/LearningLoggedOutItemsSlot';

import genericMessages from '../generic/messages';

const LearningLoggedOutButtons = ({buttonsInfo}) => {
  return buttonsInfo.map((buttonInfo, index) => (
    <Button
      key={index}
      className='ml-3'
      variant={buttonInfo.variant ?? 'outline-primary'}
      href={buttonInfo.href}
    >
      {buttonInfo.message}
    </Button>
  ));
}

LearningLoggedOutButtons.propTypes = learningHeaderLoggedOutItemsDataShape;

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

  return <LearningLoggedOutItemsSlot buttonsInfo={buttonsInfo} />;
};

AnonymousUserMenu.propTypes = {
  intl: intlShape.isRequired,
};

export { LearningLoggedOutButtons };
export default injectIntl(AnonymousUserMenu);
