// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const TaskLocationFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M682.688 42.688H341.312v170.624h341.376zM128 128h128v170.688h512V128h128v337.792a266.688 266.688 0 0 0-362.688 248.832c0 109.44 61.632 195.84 107.776 246.528 6.464 7.104 12.928 13.888 19.264 20.16H128zm672 883.2-8.64-5.696a491 491 0 0 1-43.2-31.168 547.6 547.6 0 0 1-59.712-56.256c-42.432-46.72-91.136-118.016-91.136-203.392a202.688 202.688 0 0 1 405.376 0c0 85.376-48.64 156.736-91.136 203.392A547.6 547.6 0 0 1 832 989.632a603 603 0 0 1-23.36 15.872l-8.64 5.76zm-53.312-328.512V768h106.624v-85.312z" })))
        } />;
      }

      export default TaskLocationFilled;