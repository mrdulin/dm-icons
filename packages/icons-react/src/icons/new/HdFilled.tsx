// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const HdFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M640 597.312V426.688h85.376v170.624zM981.376 128H42.688v768h938.688zM298.688 469.312H384v-128h85.376v341.376H384v-128h-85.312v128h-85.312V341.312h85.312zm426.688-128c47.104 0 85.312 38.208 85.312 85.376v170.624c0 47.168-38.208 85.376-85.312 85.376H554.688V341.312z" })))
        } />;
      }

      export default HdFilled;