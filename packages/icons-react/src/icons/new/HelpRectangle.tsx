// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const HelpRectangle = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M85.312 85.312h853.312v853.376H85.312zm85.312 85.376v682.624h682.688V170.688zM512 309.312c-37.12 0-68.736 23.68-80.512 56.96l-14.208 40.192-80.448-28.48 14.208-40.192a170.688 170.688 0 1 1 266.496 190.976c-18.432 14.528-34.816 28.416-46.72 43.072-11.776 14.4-16.192 25.984-16.192 36.16v53.312h-85.312V608c0-36.992 16.64-67.136 35.264-90.048 18.432-22.592 41.6-41.6 60.16-56.192A85.312 85.312 0 0 0 512 309.312M469.312 704h85.504v85.504h-85.504z" })))
        } />;
      }

      export default HelpRectangle;