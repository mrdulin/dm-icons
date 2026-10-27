// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const AddCircleTwoTone = React.forwardRef<HTMLSpanElement, Omit<DMIconProps, 'icon'>>((props, ref) => {
        return <DMIcon ref={ref} {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 16 16", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fillOpacity: 0.16, d: "M8 .667a7.333 7.333 0 1 0 0 14.666A7.333 7.333 0 0 0 8 .667" }),
    React.createElement("path", { fillOpacity: 0.26, fillRule: "evenodd", d: "M8 .667a7.333 7.333 0 1 0 0 14.666A7.333 7.333 0 0 0 8 .667m0 1a6.333 6.333 0 1 1 0 12.666A6.333 6.333 0 0 1 8 1.667", clipRule: "evenodd" }),
    React.createElement("path", { d: "M8.667 8.833H4.333v-1.5h7.334v1.5z" }),
    React.createElement("path", { d: "M8.75 7.417v4.333h-1.5V4.417h1.5z" })))
        } />;
      })

      export default AddCircleTwoTone;