import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { getConfig } from '@edx/frontend-platform';
import { injectIntl, useIntl, intlShape } from '@edx/frontend-platform/i18n';
import { AppContext } from '@edx/frontend-platform/react';

import AnonymousUserMenu from './AnonymousUserMenu';
import AuthenticatedUserDropdown from './AuthenticatedUserDropdown';
import LogoSlot from '../plugin-slots/LogoSlot';
import CourseInfoSlot, { courseInfoDataShape } from '../plugin-slots/CourseInfoSlot';
import messages from './messages';
import LearningHelpSlot from '../plugin-slots/LearningHelpSlot';

const LearningHeaderCourseInfo = ({
  courseOrg,
  courseNumber,
  courseTitle
}) => (
  <div style={{ minWidth: 0 }}>
    <span className="d-block small m-0">{courseOrg} {courseNumber}</span>
    <span className="d-block m-0 font-weight-bold course-title">{courseTitle}</span>
  </div>
);

LearningHeaderCourseInfo.propTypes = courseInfoDataShape;

const LearningHeaderHelpLink = () => {
  const intl = useIntl();
  return (
    <a className="text-gray-700" href={`${getConfig().SUPPORT_URL}`}>{intl.formatMessage(messages.help)}</a>
  );
};

const LearningHeader = ({
  courseOrg, courseNumber, courseTitle, intl, showUserDropdown,
}) => {
  const { authenticatedUser } = useContext(AppContext);

  const headerLogo = (
    <LogoSlot
      href={`${getConfig().LMS_BASE_URL}/dashboard`}
      src={getConfig().LOGO_URL}
      alt={getConfig().SITE_NAME}
    />
  );

  return (
    <header className="learning-header">
      <a className="sr-only sr-only-focusable" href="#main-content">{intl.formatMessage(messages.skipNavLink)}</a>
      <div className="container-xl py-2 d-flex align-items-center">
        {headerLogo}
        <div className="flex-grow-1 course-title-lockup d-flex" style={{ lineHeight: 1 }}>
          <CourseInfoSlot courseOrg={courseOrg} courseNumber={courseNumber} courseTitle={courseTitle} />
        </div>
        {showUserDropdown && authenticatedUser && (
        <> 
          <LearningHelpSlot /> 
          <AuthenticatedUserDropdown
            username={authenticatedUser.username}
          />
        </>
        )}
        {showUserDropdown && !authenticatedUser && (
        <AnonymousUserMenu />
        )}
      </div>
    </header>
  );
};

LearningHeader.propTypes = {
  ...courseInfoDataShape,
  intl: intlShape.isRequired,
  showUserDropdown: PropTypes.bool,
};

LearningHeader.defaultProps = {
  courseOrg: null,
  courseNumber: null,
  courseTitle: null,
  showUserDropdown: true,
};

export { LearningHeaderCourseInfo, LearningHeaderHelpLink };
export default injectIntl(LearningHeader);
