// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const BackupFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M512.314 85.312A320.064 320.064 0 0 1 828.09 353.408 277.44 277.44 0 0 1 747.002 896H277.626a277.312 277.312 0 0 1-81.088-542.592A320.064 320.064 0 0 1 512.314 85.312m128 465.664 60.352-60.288-188.352-188.352-188.352 188.352 60.352 60.288 85.312-85.312v259.648h85.376V465.664l85.312 85.376z" })))
        } />;
      }

      export default BackupFilled;