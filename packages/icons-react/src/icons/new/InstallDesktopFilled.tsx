// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const InstallDesktopFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M42.688 128h554.688v85.312H128V640h768V469.312h85.376v341.376H42.688zm128 768h682.688v85.312H170.688zM853.376 42.752V238.4l64-64 60.416 60.288-167.04 167.04-167.104-167.04 60.288-60.416 64.128 64.128V42.752z" })))
        } />;
      }

      export default InstallDesktopFilled;