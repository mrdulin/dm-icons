// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const ArrowRightCircle = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M128 512a384 384 0 1 1 768 0 384 384 0 0 1-768 0M512 42.688a469.312 469.312 0 1 0 0 938.624 469.312 469.312 0 0 0 0-938.624m-234.624 512H600.96l-128 128 60.352 60.352L764.416 512l-231.04-231.04-60.352 60.352 128 128H277.376z" })))
        } />;
      }

      export default ArrowRightCircle;