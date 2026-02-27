// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const MoneyFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M576 682.688a64 64 0 1 1-128 0 64 64 0 0 1 128 0M612.16 28.16l135.68 190.08 89.472-30.464 81.664 238.848H960v512H64v-512h21.76v-.384l27.648.256zm-211.2 398.464H828.8l-44.288-129.408-64.896 20.8-318.72 108.608zm-66.56-67.456L663.36 247.04l-68.416-96-260.48 208.128zM234.624 512h-85.248v85.312c47.168 0 85.376-38.208 85.376-85.312zm426.688 170.688a149.312 149.312 0 1 0-298.624 0 149.312 149.312 0 0 0 298.624 0m213.376 170.624V768c-47.168 0-85.376 38.208-85.376 85.312zM789.312 512c0 47.104 38.208 85.312 85.376 85.312V512zm-640 341.312h85.376c0-47.104-38.208-85.312-85.376-85.312z" })))
        } />;
      }

      export default MoneyFilled;