// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Radio1 = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M569.28 104.448 266.112 256h715.264v682.688h-42.688V896v42.688h-896V272.32L531.072 28.096zM896 853.312v-512H128v512zM384 512a85.312 85.312 0 1 0 0 170.688A85.312 85.312 0 0 0 384 512m-170.624 85.312a170.688 170.688 0 1 1 341.312 0 170.688 170.688 0 0 1-341.312 0m426.624-128h170.688v85.376H640zM640 640h170.688v85.312H640z" })))
        } />;
      }

      export default Radio1;