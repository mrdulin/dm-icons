// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Send2Outlined = React.forwardRef<HTMLSpanElement, Omit<DMIconProps, 'icon'>>((props, ref) => {
        return <DMIcon ref={ref} {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 16 16", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: "url(#clip0_25101_15630)" },
        React.createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M14.199.89a.716.716 0 0 1 .911.912l-4.504 12.87a.715.715 0 0 1-1.328.053l-2.463-5.54-5.54-2.462a.717.717 0 0 1-.284-1.08.7.7 0 0 1 .338-.249zM8.209 8.8l1.642 3.695 2.874-8.212zM3.504 6.148 7.199 7.79l4.515-4.515z", clipRule: "evenodd" })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: "clip0_25101_15630" },
            React.createElement("path", { fill: "#fff", d: "M0 0h16v16H0z" })))))
        } />;
      })

      export default Send2Outlined;