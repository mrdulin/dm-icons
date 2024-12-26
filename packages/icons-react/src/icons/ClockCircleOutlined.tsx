// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../dm-icon';

      const ClockCircleOutlined = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0m0 1.6a6.4 6.4 0 1 0 0 12.8A6.4 6.4 0 0 0 8 1.6M7.887 4c.49 0 .886.349.886.778v3.857l1.786.913c.274.14.442.398.441.676s-.171.535-.447.673a1 1 0 0 1-.887-.003l-1.93-.986C7.28 9.674 7 9.246 7 8.784V4.778C7 4.349 7.398 4 7.887 4" })))
        } />;
      }

      export default ClockCircleOutlined;