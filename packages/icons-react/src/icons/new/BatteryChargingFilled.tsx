// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const BatteryChargingFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M528 220.672 455.36 176 222.272 554.688h256l-152.96 248.64 72.64 44.736L631.04 469.312h-256zm-528-7.36h357.184L107.776 618.688h256l-118.144 192H0zm896 597.376H496.128l249.408-405.376h-256l118.144-192H896zM1024 384v256h-85.312V384z" })))
        } />;
      }

      export default BatteryChargingFilled;