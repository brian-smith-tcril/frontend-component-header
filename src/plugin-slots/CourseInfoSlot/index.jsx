import React from 'react';
import PropTypes from 'prop-types';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import { LearningHeaderCourseInfo } from '../../learning-header/LearningHeader';

const CourseInfoSlot = ({
  courseOrg,
  courseNumber,
  courseTitle,
  ...attributes
}) => (
  <PluginSlot
    id="course_info_slot"
    slotOptions={{
      mergeProps: true,
    }}
  >
    <LearningHeaderCourseInfo courseOrg={courseOrg} courseNumber={courseNumber} courseTitle={courseTitle} {...attributes} />
  </PluginSlot>
);

// LogoSlot.propTypes = {
//   href: PropTypes.string.isRequired,
//   src: PropTypes.string.isRequired,
//   alt: PropTypes.string.isRequired,
// };

export default CourseInfoSlot;
