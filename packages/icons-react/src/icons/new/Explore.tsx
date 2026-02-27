// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Explore = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M783.552 240.448a384 384 0 1 0-543.04 543.104 384 384 0 0 0 543.04-543.104M180.16 180.16a469.312 469.312 0 1 1 663.68 663.68 469.312 469.312 0 0 1-663.68-663.68m564.096 99.712L532.416 830.72l-89.664-249.408-249.344-89.6zM438.144 488.96l71.296 25.6 25.6 71.296 60.608-157.504z" })))
        } />;
      }

      export default Explore;