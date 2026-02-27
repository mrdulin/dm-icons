// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Hourglass = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M170.688 85.312h682.688v128a341.25 341.25 0 0 1-176 298.688 341.25 341.25 0 0 1 176 298.688v128H170.688v-128a341.25 341.25 0 0 1 176-298.688 341.25 341.25 0 0 1-176-298.688zM512 554.752a256 256 0 0 0-256 256v42.688h512v-42.688a256 256 0 0 0-256-256m-256-384v42.688a256 256 0 0 0 512 0v-42.688z" })))
        } />;
      }

      export default Hourglass;