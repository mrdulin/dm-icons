// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const CheckDouble = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M753.408 305.92 527.104 532.288 466.752 472l226.304-226.304 60.352 60.352zm241.344 0-452.48 452.608-271.616-271.552 60.352-60.288 211.2 211.2L934.4 245.568zM89.664 426.752l211.2 211.2 15.04-15.104 60.352 60.352-75.392 75.392L29.312 486.976l60.352-60.288z" })))
        } />;
      }

      export default CheckDouble;