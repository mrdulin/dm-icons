// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const PlayCircleStrokeAdd = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M512 128a384 384 0 0 0 0 768h42.688v85.376H512A469.312 469.312 0 1 1 981.376 512v42.688H896V512a384 384 0 0 0-384-384M405.376 304.256 716.928 512 405.376 719.744zm85.312 159.488v96.512L563.072 512zM853.376 640v128h128v85.312h-128v128H768v-128H640V768h128V640z" })))
        } />;
      }

      export default PlayCircleStrokeAdd;