// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const City4Filled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M640 192.832 789.312 73.344l149.312 119.488v745.856h-384v-256h-85.312v256h-384V192.832L234.624 73.344 384 192.832v164.8l128-64 128 64zm-469.376 40.96v619.52h128v-619.52l-64-51.2zm554.688 0v619.52h128v-619.52l-64-51.2zM597.312 512H426.624v85.312h170.688z" })))
        } />;
      }

      export default City4Filled;