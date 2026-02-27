// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const CloseCircleOutlined = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 14 14", width: "1em", height: "1em", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: "currentColor", d: "M9.871 5.495 8.147 7.22l1.724 1.723-.929.928L7.22 8.146 5.495 9.87l-.928-.928L6.291 7.22 4.567 5.495l.928-.928L7.22 6.291l1.723-1.724z" }),
    React.createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M7 .219A6.781 6.781 0 1 1 7 13.78 6.781 6.781 0 0 1 7 .22M7 1.53A5.469 5.469 0 1 0 7 12.47 5.469 5.469 0 0 0 7 1.53", clipRule: "evenodd" })))
        } />;
      }

      export default CloseCircleOutlined;