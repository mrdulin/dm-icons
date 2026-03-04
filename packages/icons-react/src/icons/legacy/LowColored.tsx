// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const LowColored = React.forwardRef<HTMLSpanElement, Omit<DMIconProps, 'icon'>>((props, ref) => {
        return <DMIcon ref={ref} {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 16 16", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("circle", { cx: 8, cy: 8, r: 8, fill: "url(#paint0_linear_1320_3611)" }),
    React.createElement("path", { fill: "#fff", d: "M8.353 10.65h3.31v1.43h-5.04V3.92h1.73z" }),
    React.createElement("defs", null,
        React.createElement("linearGradient", { id: "paint0_linear_1320_3611", x1: 8, x2: 8, y1: 6.182, y2: 16, gradientUnits: "userSpaceOnUse" },
            React.createElement("stop", { offset: 0.26, stopColor: "#637EA4" }),
            React.createElement("stop", { offset: 1, stopColor: "#40516B" })))))
        } />;
      })

      export default LowColored;