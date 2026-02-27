// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const FileIconFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M554.688 42.688H128v938.624h85.312V576h213.376v6.208c13.44-4.032 27.84-6.208 42.624-6.208h128v6.208A149.4 149.4 0 0 1 640 576h42.688c14.784 0 29.12 2.176 42.624 6.208V576H896V384H554.688zm341.312 256V280.96L657.664 42.688H640v256zM362.688 981.312V640h-85.376v341.312zM469.312 640C422.208 640 384 678.208 384 725.312V896c0 47.104 38.208 85.312 85.312 85.312h64V896h-64V725.312h64V640zM640 640c-47.104 0-85.312 38.208-85.312 85.312V896c0 47.104 38.208 85.312 85.312 85.312h42.688C729.792 981.312 768 943.104 768 896V725.312C768 678.208 729.792 640 682.688 640zm0 256V725.312h42.688V896zm277.312-256h-128v341.312h85.376v-256h42.624v256h85.376v-256c0-47.104-38.208-85.312-85.376-85.312" })))
        } />;
      }

      export default FileIconFilled;