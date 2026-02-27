// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const HourglassFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M170.688 85.312h682.688v128a341.25 341.25 0 0 1-176 298.688 341.25 341.25 0 0 1 176 298.688v128H170.688v-128a341.25 341.25 0 0 1 176-298.688 341.25 341.25 0 0 1-176-298.688zm597.312 128v-42.624H256v42.624c0 38.08 8.32 74.24 23.232 106.688h465.6A255 255 0 0 0 768 213.312M469.44 558.208A256.064 256.064 0 0 0 256 810.688v42.624h46.976a213.57 213.57 0 0 1 166.464-166.4zm85.12 128.704a213.57 213.57 0 0 1 166.528 166.4H768v-42.624a256.064 256.064 0 0 0-213.376-252.48v128.704z" })))
        } />;
      }

      export default HourglassFilled;