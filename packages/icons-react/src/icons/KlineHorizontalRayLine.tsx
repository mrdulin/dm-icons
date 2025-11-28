// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../dm-icon';

      const KlineHorizontalRayLine = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { viewBox: "0 0 22 22", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M6.915 11h4.17a1.5 1.5 0 0 1 2.83 0H18.5a.5.5 0 0 1 0 1h-4.585a1.5 1.5 0 0 1-2.83 0h-4.17a1.5 1.5 0 1 1 0-1" })))
        } />;
      }

      export default KlineHorizontalRayLine;