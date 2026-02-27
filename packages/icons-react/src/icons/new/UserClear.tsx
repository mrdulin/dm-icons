// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const UserClear = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M490.624 170.688a149.312 149.312 0 1 0 0 298.624 149.312 149.312 0 0 0 0-298.624M256 320a234.688 234.688 0 1 1 469.312 0A234.688 234.688 0 0 1 256 320m391.296 267.008L768 707.648l120.64-120.64 60.352 60.288L828.352 768l120.64 120.704-60.352 60.352L768 828.352 647.296 949.056l-60.352-60.352L707.648 768 586.88 647.296l60.352-60.288zm-305.984 95.68a170.69 170.69 0 0 0-170.688 170.688h343.552v85.312H85.312v-85.312a256 256 0 0 1 256-256H512v85.312z" })))
        } />;
      }

      export default UserClear;