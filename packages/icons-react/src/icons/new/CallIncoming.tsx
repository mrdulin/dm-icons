// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const CallIncoming = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "m940.032 144.128-140.48 140.48 90.368 1.92-1.856 85.376-231.168-4.992-4.992-231.168 85.312-1.856 1.92 90.432L879.68 83.776zM42.688 85.312h366.08l63.424 285.44-79.36 79.36a600.8 600.8 0 0 0 181.12 181.056l79.296-79.36 285.44 63.424v366.08H896c-170.56 0-329.6-50.048-462.912-136.32a857.6 857.6 0 0 1-254.08-254.08A849.54 849.54 0 0 1 42.752 128V85.312zm86.528 85.376a763.46 763.46 0 0 0 121.472 373.888 772.35 772.35 0 0 0 228.736 228.736 763.5 763.5 0 0 0 373.952 121.536V683.712l-172.928-38.4-92.8 92.8-28.288-16.064A685.76 685.76 0 0 1 302.08 464.64l-16.064-28.288 92.8-92.8-38.4-172.864z" })))
        } />;
      }

      export default CallIncoming;