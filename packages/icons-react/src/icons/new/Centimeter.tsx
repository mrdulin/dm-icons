// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Centimeter = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M469.376 170.688H896c47.168 0 85.376 38.144 85.376 85.312v597.312H896V256H768v597.312h-85.312V256h-128v597.312h-85.312V170.624zM42.688 256c0-47.168 38.208-85.312 85.312-85.312h298.688V256H128v512h298.688v85.312H128A85.31 85.31 0 0 1 42.688 768z" })))
        } />;
      }

      export default Centimeter;