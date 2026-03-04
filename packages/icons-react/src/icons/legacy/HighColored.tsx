// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const HighColored = React.forwardRef<HTMLSpanElement, Omit<DMIconProps, 'icon'>>((props, ref) => {
        return <DMIcon ref={ref} {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 16 16", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("circle", { cx: 8, cy: 8, r: 8, fill: "url(#paint0_linear_1320_3608)" }),
    React.createElement("path", { fill: "#fff", d: "M6.387 7.118h3.231V3.921h1.725v8.158H9.618V8.558h-3.23v3.521h-1.73V3.921h1.73z" }),
    React.createElement("defs", null,
        React.createElement("linearGradient", { id: "paint0_linear_1320_3608", x1: 8, x2: 8, y1: 18.857, y2: 0, gradientUnits: "userSpaceOnUse" },
            React.createElement("stop", { stopColor: "#DA1600" }),
            React.createElement("stop", { offset: 0.65, stopColor: "#FFA741" })))))
        } />;
      })

      export default HighColored;