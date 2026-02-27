// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const ColorInvert = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "m512 67.648 256.448 256.448a362.75 362.75 0 0 1 81.28 388.864 321 321 0 0 1-81.856 124.544 362.8 362.8 0 0 1-112.192 76.16 362.816 362.816 0 0 1-400.128-589.568zM646.72 823.04c19.264-11.008 39.488-26.112 61.888-46.912 27.648-27.776 48.192-59.968 61.632-94.272 11.52-32 16.896-66.752 16.256-101.888-1.344-74.304-29.632-146.752-78.4-195.52L554.624 230.976v620.48a236 236 0 0 0 66.048-15.68c8.832-3.776 17.536-8 26.048-12.736m-177.408-592L315.904 384.384a277.312 277.312 0 0 0 153.408 470.144z" })))
        } />;
      }

      export default ColorInvert;