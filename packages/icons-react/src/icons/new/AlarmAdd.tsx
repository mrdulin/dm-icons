// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const AlarmAdd = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M295.04 106.688 64 337.728 3.712 277.312l231.04-231.04zm494.336-60.352 231.04 231.04L960 337.664l-230.976-231.04zM512 213.376A341.312 341.312 0 1 0 512 896a341.312 341.312 0 0 0 0-682.688zM85.376 554.624a426.688 426.688 0 1 1 853.312 0 426.688 426.688 0 0 1-853.312 0m469.312-213.376V512h170.688v85.312H554.688V768h-85.312V597.312H298.688V512h170.688V341.312h85.312z" })))
        } />;
      }

      export default AlarmAdd;