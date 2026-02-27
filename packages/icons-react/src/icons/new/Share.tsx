// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Share = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M682.24 44.16a170.688 170.688 0 1 1-36.48 267.392L377.792 466.24a169.6 169.6 0 0 1 0 91.52L645.76 712.448a170.752 170.752 0 1 1-42.688 73.92L335.104 631.616a170.752 170.752 0 1 1 0-239.232l267.968-154.752A170.75 170.75 0 0 1 682.24 44.16m159.232 105.152a85.312 85.312 0 1 0-147.84 85.312 85.312 85.312 0 0 0 147.84-85.312M131.008 534.4A85.44 85.44 0 0 0 256 585.856a85.312 85.312 0 1 0-124.992-51.392zM810.24 758.08a85.312 85.312 0 1 0-85.312 147.776 85.312 85.312 0 0 0 85.312-147.84z" })))
        } />;
      }

      export default Share;