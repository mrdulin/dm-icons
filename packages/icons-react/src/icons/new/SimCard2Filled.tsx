// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const SimCard2Filled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M896 42.688H323.648L128 238.336v743.04h768V42.624zM469.312 469.312V512H384v-42.688a128 128 0 1 1 219.712 89.408l-1.216 1.216-78.528 68.736H640v85.376H384v-76.352l159.552-139.584a42.688 42.688 0 1 0-74.24-28.8" })))
        } />;
      }

      export default SimCard2Filled;