// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const FileUnknown = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M128 42.688h529.664L896 280.96v209.664h-85.312V384h-256V128H213.312v768h405.376v85.312H128zm512 103.04v152.96h152.96zM768 640c-39.68 0-64 28.032-64 53.312v42.624h-85.312v-42.624c0-80.704 71.232-138.624 149.312-138.624s149.312 57.92 149.312 138.624c0 39.04-17.28 73.6-43.776 98.112l-62.848 59.328v29.12h-85.376v-65.92l90.176-85.056A48.32 48.32 0 0 0 832 693.312C832 667.968 807.68 640 768 640m-42.688 298.496h85.504V1024h-85.504z" })))
        } />;
      }

      export default FileUnknown;