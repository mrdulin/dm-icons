// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const BatteryCharging = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "m528 220.672-152.96 248.64h256L397.952 848.064l-72.64-44.8 152.96-248.576h-256L455.424 176l72.704 44.672zm-528-7.36h320v85.376H85.312v426.624H256v85.376H0zm597.312 0H896v597.376H554.688v-85.376h256V298.688H597.312zM1024 384v256h-85.312V384z" })))
        } />;
      }

      export default BatteryCharging;