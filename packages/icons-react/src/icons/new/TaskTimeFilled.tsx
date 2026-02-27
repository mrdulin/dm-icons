// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const TaskTimeFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M682.688 42.688H341.312v170.624h341.376zM128 128h128v170.688h512V128h128v370.048a298.688 298.688 0 0 0-337.024 483.2H128V128.064zm405.312 640a234.688 234.688 0 1 1 469.376 0 234.688 234.688 0 0 1-469.376 0m337.728 42.688-60.352-60.352V672h-85.376v113.6l85.376 85.312 60.352-60.288z" })))
        } />;
      }

      export default TaskTimeFilled;