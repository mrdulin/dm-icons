// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Measurement1 = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M85.312 85.312H512V512h426.624v426.688H85.312zm85.312 85.376v106.624h85.504v85.376h-85.504v106.624h85.504v85.376h-85.504v106.624h85.504v85.376h-85.504v106.624h106.688v-83.904h85.312v83.904h106.688v-83.904h85.312v83.904h106.688v-83.904h85.312v83.904h106.688v-256H426.624V170.688z" })))
        } />;
      }

      export default Measurement1;