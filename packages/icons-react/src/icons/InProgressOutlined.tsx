// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../dm-icon';

      const InProgressOutlined = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 14 14", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fillRule: "evenodd", d: "M7 .219A6.781 6.781 0 1 1 7 13.78 6.781 6.781 0 0 1 7 .22m-.749 1.364a5.47 5.47 0 1 0 6.18 6.044h-6.18zm1.247 4.833h4.939a5.47 5.47 0 0 0-4.939-4.861z", clipRule: "evenodd" })))
        } />;
      }

      export default InProgressOutlined;