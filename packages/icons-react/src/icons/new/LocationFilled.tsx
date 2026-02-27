// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const LocationFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M431.552 930.56c25.92 21.376 52.864 40.896 80.448 59.904 27.584-19.008 54.528-38.528 80.448-59.84a1201 1201 0 0 0 121.728-115.2C801.28 720.064 896 581.824 896 426.688a384 384 0 0 0-768 0C128 581.76 222.656 720 309.824 815.36a1202 1202 0 0 0 121.728 115.2M512 565.376A138.688 138.688 0 1 1 512 288a138.688 138.688 0 0 1 0 277.312z" })))
        } />;
      }

      export default LocationFilled;