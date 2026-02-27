// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const MapSafety = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M384 78.592 643.2 229.76l295.424-123.072v320h-85.312v-192l-170.688 71.04v120.96h-85.312v-124.8L426.624 202.24v519.872l79.68 46.464-42.944 73.728-82.56-48.192L85.312 917.248V252.8zm-42.688 639.616V202.304l-170.688 99.52v487.488l170.688-71.04zm234.56-206.336h384v240.384a128 128 0 0 1-57.984 107.136l-134.016 87.552-133.952-87.552a128 128 0 0 1-58.048-107.136zm85.376 85.376v155.008c0 14.4 7.232 27.84 19.328 35.712l87.296 57.088 87.36-57.088a42.69 42.69 0 0 0 19.328-35.712V597.248z" })))
        } />;
      }

      export default MapSafety;