// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const ExcelColored = React.forwardRef<HTMLSpanElement, Omit<DMIconProps, 'icon'>>((props, ref) => {
        return <DMIcon ref={ref} {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 16 16", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: "url(#paint0_linear_19865_51562)", d: "M1.333 1.333c0-.368.299-.666.667-.666h10a2.667 2.667 0 0 1 2.667 2.666v11.334a.667.667 0 0 1-.667.666H4a2.667 2.667 0 0 1-2.667-2.666z" }),
    React.createElement("path", { fill: "#fff", d: "M11 5.6a.6.6 0 0 0-.6-.6H8.5v2.5H11zM5 7.5h2.5V5H5.6a.6.6 0 0 0-.6.6zm7 2.9-.008.163a1.6 1.6 0 0 1-1.429 1.43L10.4 12v-1a.6.6 0 0 0 .6-.6V8.5H8.5V11h1.9v1H5.6v-1h1.9V8.5H5v1.9a.6.6 0 0 0 .6.6v1a1.6 1.6 0 0 1-1.592-1.437L4 10.4V5.6A1.6 1.6 0 0 1 5.6 4h4.8l.163.008A1.6 1.6 0 0 1 12 5.6z" }),
    React.createElement("defs", null,
        React.createElement("linearGradient", { id: "paint0_linear_19865_51562", x1: 6.4, x2: 14, y1: 6.4, y2: 15.6, gradientUnits: "userSpaceOnUse" },
            React.createElement("stop", { stopColor: "#1F6ED4" }),
            React.createElement("stop", { offset: 1, stopColor: "#6E46E8" })))))
        } />;
      })

      export default ExcelColored;