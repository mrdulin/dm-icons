// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Measurement1Filled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M512 85.312H85.312v192h85.504v85.376H85.312v106.624h85.504v85.376H85.312v106.624h85.504v85.376H85.312v192h192V854.72h85.312v83.968h106.688V854.72h85.312v83.968h106.688V854.72h85.312v83.968h192V512H512z" })))
        } />;
      }

      export default Measurement1Filled;