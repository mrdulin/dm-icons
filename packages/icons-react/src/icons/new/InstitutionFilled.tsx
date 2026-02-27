// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const InstitutionFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "m512 36.48 426.624 237.056V384H85.312V273.536L512 36.544zM85.312 896h853.312v85.312H85.312zm213.312-85.312h-85.312V469.312h85.312zm256 0h-85.312V469.312h85.312zm256 0h-85.312V469.312h85.312z" })))
        } />;
      }

      export default InstitutionFilled;