// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const BasicAreaChartOutlined = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M1.778 14.222H15.11a.889.889 0 0 1 0 1.778H.89A.89.89 0 0 1 0 15.111V.89a.889.889 0 1 1 1.778 0zM15 12H4v-1.375c2.96 0 3.782-2.054 4.733-4.432C9.706 3.759 10.81 1 14.45 1H15z" })))
        } />;
      }

      export default BasicAreaChartOutlined;