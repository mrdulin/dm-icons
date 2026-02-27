// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const StreetRoadFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M938.624 85.312v853.376H85.312V85.376h853.312zM284.032 570.56l499.84-299.904-43.904-73.216-336.576 201.92L315.2 240.64l-74.56 41.472 89.6 161.216-90.112 54.016zm409.728 10.112 90.112-54.016-43.904-73.216-499.84 299.904 43.904 73.216 336.512-201.92 88.192 158.72 74.56-41.472z" })))
        } />;
      }

      export default StreetRoadFilled;