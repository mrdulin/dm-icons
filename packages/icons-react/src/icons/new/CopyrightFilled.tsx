// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const CopyrightFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M512 42.688a469.312 469.312 0 1 1 0 938.624 469.312 469.312 0 0 1 0-938.624M406.4 617.6a149.312 149.312 0 0 1 211.2-211.2l30.208 30.208 60.352-60.352-30.208-30.144a234.688 234.688 0 1 0 0 331.84l30.208-30.144-60.352-60.352L617.6 617.6a149.31 149.31 0 0 1-211.2 0" })))
        } />;
      }

      export default CopyrightFilled;