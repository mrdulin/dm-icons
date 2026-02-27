// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Traffic = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M256 85.312h512V256h128v85.312H768v128h128v85.376H768v128h128V768H768v170.688H256V768H128v-85.312h128v-128H128v-85.312h128v-128H128V256h128zm85.312 85.376v682.624h341.376v-682.56H341.312zm85.376 128a85.312 85.312 0 1 1 170.624 0 85.312 85.312 0 0 1-170.624 0m0 213.312a85.312 85.312 0 1 1 170.624 0 85.312 85.312 0 0 1-170.624 0m0 213.376a85.312 85.312 0 1 1 170.624 0 85.312 85.312 0 0 1-170.624 0" })))
        } />;
      }

      export default Traffic;