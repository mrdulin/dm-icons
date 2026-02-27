// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const FlipToFront = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M298.688 128H896v597.312H298.688zM384 213.312V640h426.688V213.312zM213.312 320v128H128V320zm0 213.312v128H128v-128zm0 213.376v64h64V896H128V746.688zm277.376 64V896h-128v-85.312zm85.312 0h128V896H576z" })))
        } />;
      }

      export default FlipToFront;