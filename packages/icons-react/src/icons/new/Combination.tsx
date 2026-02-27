// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Combination = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "m512 48.96 262.784 409.664H249.152L512 49.024zm0 158.08L405.312 373.312h213.376L512 206.976zM85.312 554.624h384v384h-384zM170.624 640v213.312H384V640zm576 0a106.688 106.688 0 1 0 0 213.312 106.688 106.688 0 0 0 0-213.312m-192 106.624a192 192 0 1 1 384 0 192 192 0 0 1-384 0" })))
        } />;
      }

      export default Combination;