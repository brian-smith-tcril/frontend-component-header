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

export const courseInfoDataShape = {
  courseOrg: PropTypes.string,
  courseNumber: PropTypes.string,
  courseTitle: PropTypes.string,
}

CourseInfoSlot.propTypes = courseInfoDataShape;

export default CourseInfoSlot;
