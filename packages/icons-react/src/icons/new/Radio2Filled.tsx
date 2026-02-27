// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Radio2Filled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M554.688 469.312a85.312 85.312 0 1 1 170.688 0 85.312 85.312 0 0 1-170.688 0M981.376 128v682.688H810.688v128h-85.312v-128H298.688v128h-85.312v-128H42.688V128zM640 298.688A170.688 170.688 0 1 0 640 640a170.688 170.688 0 0 0 0-341.312m-256 42.624H213.376v85.376H384zM384 512H213.376v85.312H384z" })))
        } />;
      }

      export default Radio2Filled;