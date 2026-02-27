// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const UserVisible = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M490.624 170.688a149.312 149.312 0 1 0 0 298.624 149.312 149.312 0 0 0 0-298.624M256 320a234.688 234.688 0 1 1 469.312 0A234.688 234.688 0 0 1 256 320m85.312 362.688a170.69 170.69 0 0 0-170.688 170.624h300.8v85.376H85.312v-85.376a256 256 0 0 1 256-256h128v85.376zm351.872 128v-85.376h106.688v85.376zM746.624 960c188.544 0 259.84-192 259.84-192s-71.424-192-259.84-192-259.84 192-259.84 192 71.36 192 259.84 192m-.064-85.312C634.944 874.688 581.44 768 581.44 768s53.312-106.688 165.12-106.688S911.68 768 911.68 768s-53.504 106.688-165.12 106.688" })))
        } />;
      }

      export default UserVisible;