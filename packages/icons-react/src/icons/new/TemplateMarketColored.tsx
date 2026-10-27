// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const TemplateMarketColored = React.forwardRef<HTMLSpanElement, Omit<DMIconProps, 'icon'>>((props, ref) => {
        return <DMIcon ref={ref} {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 16 16", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: "#0E65E7", d: "M7.5 2v4H2V2zM3 5h3.5V3H3z" }),
    React.createElement("path", { fill: "#1777FF", fillOpacity: 0.7, d: "M2 7h5.5v7H2z" }),
    React.createElement("path", { fill: "#1777FF", d: "M8.5 10H14v4H8.5z" }),
    React.createElement("path", { fill: "#1777FF", fillOpacity: 0.3, d: "M8.5 2H14v7H8.5z" })))
        } />;
      })

      export default TemplateMarketColored;