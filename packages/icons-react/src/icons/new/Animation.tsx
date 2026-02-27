// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Animation = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "m473.152 300.992 4.736-19.648 2.432-7.68 15.808-35.904A213.312 213.312 0 1 1 773.12 534.656l-22.72 9.024a208 208 0 0 1-4.992 1.6l-21.824 5.504a213.312 213.312 0 0 1-250.432-249.792m-69.056-67.584a299.65 299.65 0 0 0-170.688 170.688 298.752 298.752 0 1 0 386.56 386.496c5.568-2.176 11.136-4.48 16.64-7.04l14.4-5.76-.448-1.152a299.78 299.78 0 0 0 140.032-156.736c5.632-2.176 11.2-4.48 16.704-7.04l14.336-5.76-.448-1.088a298.688 298.688 0 1 0-417.088-372.544zM682.688 640a214.3 214.3 0 0 1-80.32 65.28l-22.592 9.088a204 204 0 0 1-5.12 1.6l-21.632 5.44A213.312 213.312 0 0 1 302.528 471.68l4.736-19.648c.704-2.624 1.536-5.184 2.368-7.744l15.872-35.904c14.592-26.24 34.56-49.152 58.496-67.072A298.69 298.69 0 0 0 682.688 640M213.376 512A298.69 298.69 0 0 0 512 810.688 213.312 213.312 0 1 1 213.376 512" })))
        } />;
      }

      export default Animation;