// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Cut = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M316.288 195.648a85.312 85.312 0 1 0-120.64 120.704 85.312 85.312 0 0 0 120.64-120.704M135.296 135.36a170.688 170.688 0 0 1 267.712 207.36L512 451.648l341.312-341.312 60.352 60.352L403.008 681.28a170.752 170.752 0 1 1-60.352-60.288L451.648 512 342.656 403.072a170.752 170.752 0 0 1-207.36-267.712M640 579.648l273.664 273.728-60.352 60.288L579.648 640zm-323.712 128a85.312 85.312 0 1 0-120.64 120.704 85.312 85.312 0 0 0 120.64-120.704" })))
        } />;
      }

      export default Cut;