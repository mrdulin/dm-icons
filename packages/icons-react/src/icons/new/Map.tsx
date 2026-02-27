// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Map = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M384 78.592 643.2 229.76l295.424-123.072v664.448L640 945.408 380.8 794.176 85.312 917.312V252.8zm42.624 643.584 170.688 99.52V301.824l-170.688-99.52zM341.312 202.24l-170.688 99.584v487.488l170.688-71.04zm341.312 103.488v515.904l170.688-99.52V234.624l-170.688 71.168z" })))
        } />;
      }

      export default Map;