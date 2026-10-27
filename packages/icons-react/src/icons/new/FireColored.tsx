// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const FireColored = React.forwardRef<HTMLSpanElement, Omit<DMIconProps, 'icon'>>((props, ref) => {
        return <DMIcon ref={ref} {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 12 12", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: "url(#paint0_linear_3732_34695)", fillRule: "evenodd", d: "M6 11.502c-2.43 0-4.401-1.792-4.401-4.001q0-1.77 1.29-2.858a.59.59 0 0 1 .634-.074c.207.1.32.31.283.521q-.21 1.18.796 1.18C6.36 6.27 2.688 1.317 7.1.498 6 2.208 8.777 4.157 9.576 5.168c.519.656.825 1.462.825 2.333 0 2.21-1.97 4-4.401 4", clipRule: "evenodd" }),
    React.createElement("defs", null,
        React.createElement("linearGradient", { id: "paint0_linear_3732_34695", x1: 6, x2: 6, y1: 0.499, y2: 11.502, gradientUnits: "userSpaceOnUse" },
            React.createElement("stop", { stopColor: "#FFE282" }),
            React.createElement("stop", { offset: 1, stopColor: "#F75C09" })))))
        } />;
      })

      export default FireColored;