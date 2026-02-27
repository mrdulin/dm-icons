// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const VideoCameraOff = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M128 67.648 956.352 896 896 956.352 725.312 785.664v67.648H0V170.688h110.336L67.648 128zM195.648 256H85.312v512H640v-67.648zm127.808-85.376 401.92.064v189.12L1024 180.608v502.08l.128 145.728-85.44-85.376V331.328l-213.312 128 .128 113.28L640 487.04V256l-230.976.064z" })))
        } />;
      }

      export default VideoCameraOff;