// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const InstitutionChecked = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M469.376 36.48 896 273.6V384H42.688V273.536L469.376 36.544zM173.184 298.752h592.32L469.376 134.144l-296.192 164.48zM256 469.312v341.376h-85.312V469.312zm256 0v341.376h-85.312V469.312zm256 0v256h-85.312v-256zM964.096 765.44l-241.28 241.28-150.912-150.784 60.352-60.352 90.496 90.496 181.056-180.992zM42.688 896H512v85.312H42.688z" })))
        } />;
      }

      export default InstitutionChecked;