import React from 'react';
      import { DMIcon, DMIconProps } from '../dm-icon';

      const LineChart = (props: DMIconProps) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 16 16", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M1.778 14.222H15.11a.889.889 0 1 1 0 1.778H.89A.89.89 0 0 1 0 15.111V.89a.889.889 0 1 1 1.778 0zm3.315-3.836A.889.889 0 1 1 3.796 9.17l3.333-3.556a.89.89 0 0 1 1.226-.068l2.63 2.245 3.428-4.342a.889.889 0 0 1 1.396 1.102l-4 5.066a.89.89 0 0 1-1.275.126L7.846 7.449z" })))
        } />;
      }

      export default LineChart;