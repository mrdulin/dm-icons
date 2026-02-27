// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const InstallMobile = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M170.688 42.688H640V128H256v768h512V469.312h85.376v512H170.688zm298.688 682.624h85.504v85.504h-85.504zm384-682.56V238.4l64-64 60.416 60.288-167.04 167.04-167.104-167.04 60.288-60.416 64.128 64.128V42.752z" })))
        } />;
      }

      export default InstallMobile;