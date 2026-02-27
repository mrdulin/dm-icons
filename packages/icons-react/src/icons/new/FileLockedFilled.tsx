// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const FileLockedFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M554.688 42.688H128v938.624h362.688v-256A277.312 277.312 0 0 1 896 479.232V384H554.688zm341.312 256V280.96L657.664 42.688H640v256zM906.688 672v32H960v277.312H576V704h53.376v-32a138.688 138.688 0 1 1 277.312 0m-85.312 0a53.312 53.312 0 1 0-106.688 0v32h106.688z" })))
        } />;
      }

      export default FileLockedFilled;