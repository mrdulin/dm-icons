// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Tower3 = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M469.376 133.376V42.688h85.312v90.688a170.752 170.752 0 0 1 67.2 295.872l66.24 552.064H335.936l66.24-552.064a170.752 170.752 0 0 1 67.2-295.936zm14.208 333.568L432.128 896h159.808L540.48 466.944a171.5 171.5 0 0 1-56.896 0M512 213.312A85.312 85.312 0 1 0 512 384a85.312 85.312 0 0 0 0-170.688" })))
        } />;
      }

      export default Tower3;