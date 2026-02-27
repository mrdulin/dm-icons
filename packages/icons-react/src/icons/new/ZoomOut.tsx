// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const ZoomOut = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M644.096 251.904a277.312 277.312 0 1 0-392.192 392.192 277.312 277.312 0 0 0 392.192-392.192m-452.544-60.352a362.688 362.688 0 0 1 541.312 480.96l228.032 228.032-60.352 60.352-228.032-228.032a362.752 362.752 0 0 1-480.96-541.312m85.76 299.136v-85.376h341.312v85.376z" })))
        } />;
      }

      export default ZoomOut;