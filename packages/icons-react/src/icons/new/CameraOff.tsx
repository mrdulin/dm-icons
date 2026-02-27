// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const CameraOff = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M85.312 24.96 956.352 896 896 956.352 835.648 896H42.688V213.312H152.96l-128-128 60.288-60.288zm153.024 273.728H128v512h622.336L642.112 702.464a213.312 213.312 0 0 1-299.2-299.264zm165.76 165.76a128 128 0 0 0 176.832 176.768zm-67.84-379.136h351.488l64 128h229.568v597.376H896v-512H698.944l-64-128H389.12l-27.328 54.592-76.288-38.208 50.88-101.76z" })))
        } />;
      }

      export default CameraOff;