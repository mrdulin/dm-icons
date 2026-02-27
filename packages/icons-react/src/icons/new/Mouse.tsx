// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Mouse = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M170.688 384a341.312 341.312 0 0 1 682.688 0v256a341.312 341.312 0 0 1-682.688 0zm298.688-252.48A256.064 256.064 0 0 0 256 384h213.376zm85.312 0V384H768a256.064 256.064 0 0 0-213.312-252.48M768 469.312H256V640a256 256 0 0 0 512 0z" })))
        } />;
      }

      export default Mouse;