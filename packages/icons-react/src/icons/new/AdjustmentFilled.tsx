// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const AdjustmentFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M220.608 170.688a128 128 0 0 1 241.408 0h476.608V256H462.08a128 128 0 0 1-241.408 0H85.312v-85.312zM561.92 469.312a128 128 0 0 1 241.472 0h135.232v85.376H803.328a128 128 0 0 1-241.408 0H85.312v-85.376zM220.608 768a128 128 0 0 1 241.408 0h476.608v85.312H462.08a128 128 0 0 1-241.408 0H85.312V768z" })))
        } />;
      }

      export default AdjustmentFilled;