// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../dm-icon';

      const HardDiskStorageFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 16 16", width: "1em", height: "1em", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: "currentColor", d: "M4.333 1.333h-3v13.334h13.334V1.333h-3v5.25H4.333z" }),
    React.createElement("path", { fill: "currentColor", d: "M10.333 1.333H5.667V5.25h4.666zm-1 1.334v2H8v-2z" })))
        } />;
      }

      export default HardDiskStorageFilled;