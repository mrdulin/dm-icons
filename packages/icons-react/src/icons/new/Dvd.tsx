// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Dvd = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M85.312 85.312h853.312v853.376H85.312zm85.312 85.376v682.624h682.688V170.688zM512 341.312a170.688 170.688 0 1 0 0 341.376 170.688 170.688 0 0 0 0-341.376M256 512a256 256 0 1 1 512 0 256 256 0 0 1-512 0m170.624 0a85.312 85.312 0 1 1 170.688 0 85.312 85.312 0 0 1-170.688 0" })))
        } />;
      }

      export default Dvd;