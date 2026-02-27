// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const MapRulerFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M1009.92 342.528 676.544 9.216l-153.6 153.536 128.704 128.64-60.288 60.352-128.704-128.64-93.184 93.184 162.816 162.816-60.352 60.288L309.12 376.64 216 469.76 344.64 598.4l-60.288 60.352-128.64-128.64-153.6 153.472 333.312 333.312 674.432-674.368z" })))
        } />;
      }

      export default MapRulerFilled;