// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const ItemColored = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { fill: "none" },
        React.createElement("path", { d: "M0 0h16v16H0z" }),
        React.createElement("path", { fill: "#B8CAE6", d: "M2 2.667h11.333c.369 0 .667.298.667.666v1.334a.667.667 0 0 1-.667.666H2a.667.667 0 0 1-.667-.666V3.333c0-.368.299-.666.667-.666m0 4h6.667c.368 0 .666.298.666.666v1.334a.667.667 0 0 1-.666.666H2a.667.667 0 0 1-.667-.666V7.333c0-.368.299-.666.667-.666m0 4h6.667c.368 0 .666.298.666.666v1.334a.667.667 0 0 1-.666.666H2a.667.667 0 0 1-.667-.666v-1.334c0-.368.299-.666.667-.666" }),
        React.createElement("rect", { width: 3.333, height: 6.667, x: 10.667, y: 6.667, fill: "#B8CAE6", opacity: 0.3, rx: 1 }))))
        } />;
      }

      export default ItemColored;