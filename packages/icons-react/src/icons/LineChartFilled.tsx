// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../dm-icon';

      const LineChartFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { fill: "none", fillRule: "evenodd" },
        React.createElement("path", { d: "M0 0h20v20H0z" }),
        React.createElement("path", { fill: "currentColor", fillRule: "nonzero", d: "M4 0h12a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3m12.181 13.75H3.82c-.564 0-1.019.437-1.019.975s.455.975 1.019.975H16.18c.564 0 1.019-.437 1.019-.975s-.455-.975-1.019-.975m-.753-9.949h-3.32a.735.735 0 0 0-.742.727c0 .4.332.726.743.726h1.573l-2.44 3.707-3.128-3.337a.753.753 0 0 0-1.072.189l-3.098 4.876a.714.714 0 0 0 .228.999.75.75 0 0 0 1.022-.222L7.72 7.517l2.97 3.17c.322.24.858.404 1.27-.274l2.725-4.038v1.398c0 .401.333.727.743.727s.743-.326.743-.727V4.526a.72.72 0 0 0-.217-.513.75.75 0 0 0-.526-.212" }))))
        } />;
      }

      export default LineChartFilled;