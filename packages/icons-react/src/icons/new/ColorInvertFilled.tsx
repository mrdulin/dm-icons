// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const ColorInvertFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "m469.312 110.336-213.76 213.76a362.688 362.688 0 0 0 213.76 616.64zm85.312 830.4a362.24 362.24 0 0 0 213.248-103.232 321.1 321.1 0 0 0 81.856-124.544 362.75 362.75 0 0 0-81.28-388.864l-213.76-213.76v830.4z" })))
        } />;
      }

      export default ColorInvertFilled;