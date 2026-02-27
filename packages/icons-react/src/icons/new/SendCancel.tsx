// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const SendCancel = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M12.416 71.04 1024.128 512 791.296 613.504l-34.112-78.208L810.56 512 158.208 227.648l85.312 241.664h225.792v85.376H243.52l-85.312 241.664 365.184-159.168 34.112 78.208L12.416 952.96 168.064 512zm972.416 611.392L864 804.16l120.32 120.384-60.288 60.352-120.32-120.32L683.52 984.832l-60.352-60.352 120.256-120.192L622.336 683.2l60.288-60.352 120.96 120.96L924.288 622.4l60.544 60.16z" })))
        } />;
      }

      export default SendCancel;