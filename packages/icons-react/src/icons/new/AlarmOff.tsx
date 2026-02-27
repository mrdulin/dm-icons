// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const AlarmOff = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "m3.712 277.312 106.624-106.624-85.312-85.376 60.352-60.288 85.312 85.312 64-64 60.352 60.352-64 64 768 768-60.352 60.352L804.8 865.088a426.688 426.688 0 0 1-603.2-603.136l-30.976-30.976L64 337.664zm258.304 44.992a341.312 341.312 0 0 0 482.368 482.368zm103.296-170.688 41.344-10.496a426.688 426.688 0 0 1 518.912 518.912l-10.496 41.344-82.752-20.992 10.56-41.344a341.312 341.312 0 0 0-415.168-415.168l-41.408 10.432zm424.064-105.28 231.04 231.04L960 337.664l-230.976-231.04z" })))
        } />;
      }

      export default AlarmOff;