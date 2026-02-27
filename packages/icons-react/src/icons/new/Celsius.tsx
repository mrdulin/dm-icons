// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Celsius = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M277.376 256a21.312 21.312 0 1 0 0 42.624 21.312 21.312 0 0 0 0-42.624m-106.688 21.312a106.688 106.688 0 1 1 213.312 0 106.688 106.688 0 0 1-213.312 0M469.376 256c0-47.168 38.208-85.312 85.312-85.312h298.688V256H554.688v512h298.688v85.312H554.688A85.31 85.31 0 0 1 469.376 768z" })))
        } />;
      }

      export default Celsius;