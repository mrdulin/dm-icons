// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Wifi = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M904.192 418.432a554.69 554.69 0 0 0-784.448 0L89.6 448.64l-60.352-60.352 30.144-30.144c249.984-249.984 655.168-249.984 905.152 0l30.144 30.144-60.352 60.352zm-196.096 196.16a277.31 277.31 0 0 0-392.256 0l-30.144 30.144-60.352-60.352 30.208-30.144a362.69 362.69 0 0 1 512.832 0l30.208 30.144-60.352 60.352zm-256.448 135.68c33.28-33.28 87.36-33.28 120.64 0l30.208 30.208L512 871.04l-90.56-90.56 30.208-30.144z" })))
        } />;
      }

      export default Wifi;