// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const TreeRoundDot = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M512 128a85.312 85.312 0 1 0 0 170.688A85.312 85.312 0 0 0 512 128m-42.624 250.624a170.752 170.752 0 1 1 85.312 0v90.688h170.688a128 128 0 0 1 128 128v48.064a170.752 170.752 0 1 1-85.376 0v-48a42.69 42.69 0 0 0-42.624-42.688H298.688A42.69 42.69 0 0 0 256 597.312v48.064a170.752 170.752 0 1 1-85.312 0v-48a128 128 0 0 1 128-128h170.688V378.56zm341.44 346.688h-.256a85.312 85.312 0 1 0 .256 0m-597.44 0a85.312 85.312 0 1 0 0 170.688 85.312 85.312 0 0 0 0-170.688" })))
        } />;
      }

      export default TreeRoundDot;