// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const ComponentSwitch = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M320 362.688a149.312 149.312 0 1 0 0 298.624 149.312 149.312 0 0 0 0-298.624m180.992 0c33.536 40.576 53.632 92.608 53.632 149.312 0 56.768-20.096 108.8-53.632 149.376H704a149.312 149.312 0 0 0 0-298.688zM85.312 512A234.69 234.69 0 0 1 320 277.312h384a234.688 234.688 0 0 1 0 469.376H320A234.69 234.69 0 0 1 85.312 512" })))
        } />;
      }

      export default ComponentSwitch;