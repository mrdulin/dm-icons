// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Dam1 = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M512 128c166.592 0 298.624 134.912 298.624 302.912v422.4h-85.312v-422.4a213.312 213.312 0 1 0-426.688 0v422.4h-85.312v-422.4C213.312 262.912 345.344 128 512 128m384 725.312v-422.4c0-213.76-168.96-388.224-384-388.224-215.168 0-384 174.464-384 388.224v422.4H85.312v85.312h341.312v-85.312H384v-422.4a128 128 0 1 1 256 0v422.4h-42.688v85.312h341.312v-85.312z" })))
        } />;
      }

      export default Dam1;