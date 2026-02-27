// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const FlipToBackFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M448 128H298.688v149.312H384v-64h64zm213.312 0h-128v85.312h128zM896 128H746.688v85.312h64v64H896zM213.312 810.688V320H128v576h576v-85.312zm170.688-320v-128h-85.312v128zm512 0v-128h-85.312v128zM384 640v-64h-85.312v149.312H448V640zm512 85.312V576h-85.312v64h-64v85.312zM661.312 640h-128v85.312h128zm64-341.312h-256v256h256z" })))
        } />;
      }

      export default FlipToBackFilled;