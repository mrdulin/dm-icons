// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const MarkupFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M512 42.688a469.312 469.312 0 1 0 0 938.624 469.312 469.312 0 0 0 0-938.624m239.36 769.6a385 385 0 0 1-75.84 47.296l-68.48-262.272H416.96l-68.416 262.272a381.7 381.7 0 0 1-75.84-47.296L351.104 512h75.584V366.336l85.376-85.376 85.312 85.312V512h75.584z" })))
        } />;
      }

      export default MarkupFilled;