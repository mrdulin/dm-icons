// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const ArrowUpDown1 = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M704 871.04 494.336 661.312l60.288-60.288 106.688 106.624V192h85.312v515.648l106.688-106.624 60.352 60.288zM277.312 832V316.352L170.624 422.976l-60.288-60.288L320 152.96l209.664 209.664-60.352 60.288-106.688-106.624V832z" })))
        } />;
      }

      export default ArrowUpDown1;