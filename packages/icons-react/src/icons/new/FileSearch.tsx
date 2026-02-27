// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const FileSearch = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M128 42.688h529.664L896 280.96v209.664h-85.312V384h-256V128H213.312v768h320v85.312H128zm512 103.04v152.96h152.96zm96 472.96a117.312 117.312 0 1 0 0 234.624 117.312 117.312 0 0 0 0-234.624M533.312 736A202.688 202.688 0 1 1 906.24 846.016l71.424 71.296-60.288 60.352-71.488-71.36A202.688 202.688 0 0 1 533.312 736" })))
        } />;
      }

      export default FileSearch;