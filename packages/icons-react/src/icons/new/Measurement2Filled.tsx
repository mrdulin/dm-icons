// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Measurement2Filled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M789.312 67.648 977.664 256l-60.352 60.352L832 230.976V792.96l85.312-85.312L977.664 768 789.312 956.352 600.96 768l60.352-60.352 85.312 85.312V231.04l-85.312 85.312L600.96 256zm-704 17.664H512v853.376H85.312z" })))
        } />;
      }

      export default Measurement2Filled;