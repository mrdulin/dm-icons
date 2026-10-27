// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const AddCircleColor = React.forwardRef<HTMLSpanElement, Omit<DMIconProps, 'icon'>>((props, ref) => {
        return <DMIcon ref={ref} {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 12 12", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: "url(#clip0_8415_41799)" },
        React.createElement("path", { fill: "#0F2F50", d: "M11 6A5 5 0 1 0 1 6a5 5 0 0 0 10 0" }),
        React.createElement("path", { fill: "#1890FF", d: "M6 1.502a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9m-5.5 4.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0m6-2.75v2.25h2.25v1H6.5v2.25h-1v-2.25H3.25v-1H5.5v-2.25z" })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: "clip0_8415_41799" },
            React.createElement("path", { fill: "#fff", d: "M0 0h12v12H0z" })))))
        } />;
      })

      export default AddCircleColor;