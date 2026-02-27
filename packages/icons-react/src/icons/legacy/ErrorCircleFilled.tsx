// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const ErrorCircleFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 24 24", width: "1em", height: "1em", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: "currentColor", fillOpacity: 0.3, d: "M23 12c0-6.075-4.925-11-11-11S1 5.925 1 12s4.925 11 11 11v1C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12v-1c6.075 0 11-4.925 11-11" }),
    React.createElement("circle", { cx: 12, cy: 12, r: 8.5, fill: "currentColor" }),
    React.createElement("path", { fill: "#fff", d: "M15.926 9.346 13.272 12l2.654 2.655-1.272 1.272-2.655-2.654-2.653 2.654-1.272-1.272 2.653-2.655-2.653-2.653 1.272-1.272L12 10.727l2.655-2.653z" })))
        } />;
      }

      export default ErrorCircleFilled;