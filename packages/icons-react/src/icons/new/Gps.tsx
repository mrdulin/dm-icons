// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Gps = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M512 128a383.168 383.168 0 0 0-281.728 643.008l28.928 31.36-62.72 57.856-28.928-31.36a468.48 468.48 0 1 1 688.832 0l-28.928 31.36-62.72-57.856 28.928-31.36A383.168 383.168 0 0 0 511.936 128zm0 192a192 192 0 0 0-141.184 322.176l28.928 31.36-62.72 57.856-28.928-31.36a277.312 277.312 0 1 1 407.744 0l-28.928 31.36-62.72-57.856 28.928-31.36A192 192 0 0 0 512 320m-85.376 192a85.312 85.312 0 1 1 170.688 0 85.312 85.312 0 0 1-170.688 0m83.072 169.28L722.56 981.312h-425.6zm0 147.456L462.08 896h95.36l-47.744-67.2z" })))
        } />;
      }

      export default Gps;