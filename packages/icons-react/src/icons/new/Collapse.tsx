// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Collapse = React.forwardRef<HTMLSpanElement, Omit<DMIconProps, 'icon'>>((props, ref) => {
        return <DMIcon ref={ref} {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 16 16", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: "currentColor", fillOpacity: 0.45, d: "M14.667 14.667H1.333V1.333h13.334zm-12-1.334h6.666V2.667H2.667zm8 0h2.666V2.667h-2.666zm-2.79-5.78.577.468-.577.466-2.5 2.02L5 10.042l-.377-.466 1.922-1.554-1.922-1.554.754-.934z" })))
        } />;
      })

      export default Collapse;