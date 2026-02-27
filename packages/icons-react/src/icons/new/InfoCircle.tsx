// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const InfoCircle = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m469.376-384a469.312 469.312 0 1 1-938.688 0 469.312 469.312 0 0 1 938.688 0m-512 234.688v-320h85.312v320zm85.312-384h-85.504V277.12h85.504v85.504z" })))
        } />;
      }

      export default InfoCircle;