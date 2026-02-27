// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Markup = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M512 128a384 384 0 0 0-239.36 684.288L351.104 512h75.648V366.336L512 280.96l85.376 85.312V512h75.584l78.4 300.288A384 384 0 0 0 512 128m163.52 731.52-68.48-262.208H416.96l-68.48 262.272c49.6 23.36 104.96 36.48 163.52 36.48s113.92-13.12 163.52-36.48zM42.688 512a469.312 469.312 0 1 1 938.688 0 469.312 469.312 0 0 1-938.688 0" })))
        } />;
      }

      export default Markup;