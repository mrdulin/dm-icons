// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../dm-icon';

      const PushPinFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { fill: "none", fillRule: "evenodd" },
        React.createElement("path", { d: "M0 0h16v16H0z" }),
        React.createElement("path", { fill: "currentColor", d: "m6.221 11.038-1.26-1.26c-1.05 1.242-2.681 3.053-2.975 3.428C1.24 14.157 1 15 1 15s.842-.24 1.794-.987c.374-.293 2.186-1.924 3.427-2.975m5.14-9.77 3.37 3.371a.913.913 0 1 1-1.292 1.293l-.268-.269-3.478 4.925 1.089 1.09a.913.913 0 1 1-1.293 1.293L3.03 6.51a.913.913 0 1 1 1.292-1.293l1.09 1.09 4.925-3.48-.268-.268a.913.913 0 1 1 1.291-1.292z" }))))
        } />;
      }

      export default PushPinFilled;