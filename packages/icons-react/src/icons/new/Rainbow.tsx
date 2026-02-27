// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Rainbow = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M512 341.312a384 384 0 0 0-384 384V768H42.688v-42.688a469.312 469.312 0 0 1 938.688 0V768H896v-42.688a384 384 0 0 0-384-384m0 128a256 256 0 0 0-256 256V768h-85.312v-42.688a341.312 341.312 0 0 1 682.688 0V768H768v-42.688a256 256 0 0 0-256-256m0 128a128 128 0 0 0-128 128V768h-85.312v-42.688a213.312 213.312 0 0 1 426.688 0V768H640v-42.688a128 128 0 0 0-128-128" })))
        } />;
      }

      export default Rainbow;