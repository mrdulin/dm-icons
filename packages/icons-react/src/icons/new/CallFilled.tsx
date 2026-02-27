// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const CallFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M42.688 85.312h366.08l63.424 285.44-79.36 79.36a600.8 600.8 0 0 0 181.12 180.992l79.296-79.296 285.44 63.424v366.08H896c-170.56 0-329.6-50.048-462.912-136.32a857.6 857.6 0 0 1-254.08-254.08A849.54 849.54 0 0 1 42.752 128V85.312z" })))
        } />;
      }

      export default CallFilled;