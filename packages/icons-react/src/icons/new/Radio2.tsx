// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Radio2 = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M42.688 128h938.688v682.688H810.688v128h-85.312v-128H298.688v128h-85.312v-128H42.688zM128 213.312v512h768v-512zM640 384a85.312 85.312 0 1 0 0 170.688A85.312 85.312 0 0 0 640 384m-170.624 85.312a170.688 170.688 0 1 1 341.312 0 170.688 170.688 0 0 1-341.312 0m-256-128H384v85.376H213.376zm0 170.688H384v85.312H213.376z" })))
        } />;
      }

      export default Radio2;