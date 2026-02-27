// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const RotateLocked = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M512 128a384 384 0 1 0 352.064 537.6l78.208 34.176A469.44 469.44 0 0 1 42.688 512a469.312 469.312 0 0 1 938.688 0v85.312l-153.6-115.2 51.2-68.224 5.44 4.096A384.13 384.13 0 0 0 512 128m0 234.688c29.44 0 53.376 23.872 53.376 53.312v32H458.688v-32c0-29.44 23.872-53.312 53.312-53.312M650.688 448v-32a138.688 138.688 0 0 0-277.312 0v32h-53.44v277.312h384V448zm-32.064 85.312V640H405.312V533.312z" })))
        } />;
      }

      export default RotateLocked;