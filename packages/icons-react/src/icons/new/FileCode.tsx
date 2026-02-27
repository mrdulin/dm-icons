// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const FileCode = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M128.064 42.688h529.664l238.336 238.336v273.664h-85.312V384.064h-256V128H213.376v768h256v85.312H128.064zm512 103.04v152.96h152.96zm369.664 505.216L891.264 768.192l118.4 117.248-59.968 60.672-179.776-177.92 179.776-177.92zM554.688 896h192v85.312h-192z" })))
        } />;
      }

      export default FileCode;