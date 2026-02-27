// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const TaskChecked1 = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M512 128a384 384 0 1 0 384 384v-42.688h85.376V512A469.312 469.312 0 1 1 692.608 78.72l39.36 16.384-32.832 78.72-39.424-16.384A382.7 382.7 0 0 0 512 128m487.04 64L512 679.04 259.712 426.688 320 366.336l192 192 426.688-426.688z" })))
        } />;
      }

      export default TaskChecked1;