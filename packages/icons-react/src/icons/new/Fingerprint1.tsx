// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Fingerprint1 = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M85.312 512a426.688 426.688 0 1 1 853.312 0v384h-85.312V512a341.312 341.312 0 1 0-682.688 0v384H85.312zm192 0a234.688 234.688 0 1 1 469.312 0v384h-85.312V512a149.312 149.312 0 1 0-298.688 0v384h-85.312zm277.312-42.688V896h-85.312V469.312z" })))
        } />;
      }

      export default Fingerprint1;