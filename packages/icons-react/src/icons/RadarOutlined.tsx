// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../dm-icon';

      const RadarOutlined = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M12 1a1 1 0 0 1 1 1l.001 8.121a2.128 2.128 0 1 1-2.001 0V7.684a4.43 4.43 0 0 0 1 8.744 4.429 4.429 0 0 0 3.776-6.745 1 1 0 1 1 1.703-1.048A6.429 6.429 0 1 1 11 5.65V3.055l-.05.006a9 9 0 0 0-7.946 8.674L3 12a9 9 0 0 0 18 0 8.95 8.95 0 0 0-1.969-5.619 1 1 0 0 1 1.562-1.25q.234.295.45.604A10.95 10.95 0 0 1 23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1" })))
        } />;
      }

      export default RadarOutlined;