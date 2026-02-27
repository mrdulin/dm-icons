// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Book = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M128 256A170.69 170.69 0 0 1 298.688 85.312H896v853.376H298.688A170.69 170.69 0 0 1 128 768zm85.312 364.16a169.86 169.86 0 0 1 85.376-22.848h512V170.688h-512c-47.168 0-85.376 38.208-85.376 85.312zm597.376 62.528h-512a85.312 85.312 0 1 0 0 170.624h512zM426.688 256h298.624v85.312H426.688z" })))
        } />;
      }

      export default Book;