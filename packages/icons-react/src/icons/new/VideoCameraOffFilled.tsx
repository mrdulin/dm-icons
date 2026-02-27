// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const VideoCameraOffFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M999.04 938.688 85.312 24.96 25.024 85.248l85.312 85.376H0v682.624h725.312V785.6l213.376 213.376 60.352-60.352zm24.96-97.152-4.288-2.432L351.36 170.688h374.016v189.184L1024 180.672z" })))
        } />;
      }

      export default VideoCameraOffFilled;