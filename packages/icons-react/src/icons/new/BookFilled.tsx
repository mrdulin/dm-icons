// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const BookFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M298.688 85.312A170.69 170.69 0 0 0 128 256v512a170.69 170.69 0 0 0 170.688 170.688H896V85.312zm170.624 128H768v85.376H469.312zM213.312 768c0-47.104 38.208-85.312 85.376-85.312h512v170.624h-512A85.31 85.31 0 0 1 213.312 768" })))
        } />;
      }

      export default BookFilled;