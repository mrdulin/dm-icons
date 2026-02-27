// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const ChartBubbleFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M170.624 85.312v768h768v85.376H85.312V85.312zm384 170.688a128 128 0 1 1 256 0 128 128 0 0 1-256 0M256 597.312a170.688 170.688 0 1 1 341.312 0 170.688 170.688 0 0 1-341.312 0m469.312 0a85.312 85.312 0 1 1 170.688 0 85.312 85.312 0 0 1-170.688 0" })))
        } />;
      }

      export default ChartBubbleFilled;