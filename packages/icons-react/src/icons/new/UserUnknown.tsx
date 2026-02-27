// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const UserUnknown = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M490.624 170.688a149.312 149.312 0 1 0 0 298.624 149.312 149.312 0 0 0 0-298.624M256 320a234.688 234.688 0 1 1 469.312 0A234.688 234.688 0 0 1 256 320m512 277.312c-39.68 0-64 28.032-64 53.312v42.624h-85.376v-42.624C618.624 569.92 689.92 512 768 512s149.312 57.92 149.312 138.624c0 39.04-17.344 73.6-43.776 98.112l-62.912 59.328v29.12h-85.312v-65.92l90.112-85.056A48.32 48.32 0 0 0 832 650.624c0-25.28-24.32-53.312-64-53.312m-426.688 85.376a170.69 170.69 0 0 0-170.688 170.624h375.552v85.376H85.312v-85.376a256 256 0 0 1 256-256H544v85.376zm384 213.12h85.44v85.504h-85.504v-85.504z" })))
        } />;
      }

      export default UserUnknown;