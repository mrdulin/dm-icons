// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../dm-icon';

      const ReportOutlined = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M19.333.998a1 1 0 0 1 1 1V17L22 17a1 1 0 0 1 .993.883L23 18v.667A4.333 4.333 0 0 1 18.667 23h-14A3.666 3.666 0 0 1 1 19.333V2a1 1 0 0 1 1-1h12.952l.033-.002zM20.975 19H8.333v.334c0 .588-.138 1.144-.384 1.637l-.016.03h10.734c1.128 0 2.068-.8 2.286-1.863zM18.333 3H16V12l-2.46-2.522L11 12V3H3v16.333c0 .873.67 1.588 1.523 1.66l.144.007c.92 0 1.666-.746 1.666-1.667V18a1 1 0 0 1 1-1h11z" })))
        } />;
      }

      export default ReportOutlined;