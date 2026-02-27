// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const GiftFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M981.376 938.688V256H787.84A170.688 170.688 0 0 0 512 57.792 170.688 170.688 0 0 0 236.16 256H42.688v682.688zm-426.688-768a85.312 85.312 0 1 1 170.688 0 85.312 85.312 0 0 1-170.688 0m60.352 170.624H896v256H128v-256h280.96l-128 128 60.416 60.352L512 359.04l170.688 170.688 60.352-60.352-128-128zM469.376 170.688a85.312 85.312 0 1 1-170.688 0 85.312 85.312 0 0 1 170.688 0" })))
        } />;
      }

      export default GiftFilled;