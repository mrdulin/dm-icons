// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const CameraFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M373.376 544a138.688 138.688 0 1 1 277.312 0 138.688 138.688 0 0 1-277.312 0M336.32 85.312h351.36l64 128h229.696V896H42.688V213.312H272.32zM288 544a224 224 0 1 0 448 0 224 224 0 0 0-448 0" })))
        } />;
      }

      export default CameraFilled;