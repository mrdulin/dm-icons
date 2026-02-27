// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const DataDisplay = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M938.688 768H128v85.312h810.688zm-85.376-85.376c47.168 0 85.376-38.144 85.376-85.312V256c0-47.168-38.208-85.312-85.376-85.312H682.688V256h170.624v128H704v85.312h149.312v128H682.688v85.312zM640 597.312H469.312v-128h85.376C601.792 469.312 640 431.104 640 384V256c0-47.168-38.208-85.312-85.312-85.312H384V256h170.688v128h-85.376C422.208 384 384 422.208 384 469.312v213.312h256zm-298.688 0h-64V256c0-47.168-38.208-85.312-85.312-85.312h-64V256h64v341.312h-64v85.312h213.312z" })))
        } />;
      }

      export default DataDisplay;