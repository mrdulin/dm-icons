// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../dm-icon';

      const PieChartFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 17.5 17.5", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "m2.164 9.639 8.204 1.64V2.22a7.295 7.295 0 0 1-.912 14.531 7.294 7.294 0 0 1-7.292-7.111m-.859-1.996a7.295 7.295 0 0 1 7.24-6.393v7.841z" })))
        } />;
      }

      export default PieChartFilled;