// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const SegmentedRingPieChartOutlined = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M9.35 5.586v2.855a4.663 4.663 0 1 0 6.209 6.208h2.855A7.345 7.345 0 1 1 9.35 5.586m3.399-1.584a8 8 0 0 1 7.249 7.249.668.668 0 0 1-.665.728h-6.644a.67.67 0 0 1-.668-.668V4.667a.67.67 0 0 1 .728-.665" })))
        } />;
      }

      export default SegmentedRingPieChartOutlined;