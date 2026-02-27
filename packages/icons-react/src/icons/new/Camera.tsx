// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Camera = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M336.32 85.312h351.36l64 128h229.696V896H42.688V213.312H272.32zm52.736 85.376-64 128H128v512h768v-512H699.008l-64-128zM512 405.312a128 128 0 1 0 0 256 128 128 0 0 0 0-256m-213.312 128a213.312 213.312 0 1 1 426.688 0 213.312 213.312 0 0 1-426.688 0" })))
        } />;
      }

      export default Camera;