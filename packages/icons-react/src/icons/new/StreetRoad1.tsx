// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const StreetRoad1 = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M85.312 85.312h853.312v853.376H85.312V85.376zm85.312 85.376v682.624h682.688v-682.56H170.624zm263.552 94.528L332.16 775.552l-83.648-16.704 102.08-510.4 83.648 16.768zm239.296-16.768 102.08 510.336-83.712 16.768-102.08-510.336zm-118.848 50.24v128h-85.312v-128zm0 170.688v128h-85.312v-128zm0 170.624v128h-85.312V640z" })))
        } />;
      }

      export default StreetRoad1;