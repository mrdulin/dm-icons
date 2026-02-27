// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const MapCollection = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M384 78.592 643.2 229.76l295.424-123.072V448h-85.312V234.688l-170.688 71.04V448h-85.312V301.824l-170.688-99.52v519.872l79.68 46.464-42.944 73.728-82.56-48.192L85.312 917.312V252.8zm-42.688 639.616V202.304l-170.688 99.52v487.488l170.688-71.04zM768 457.856l94.336 137.6 160 47.232-101.76 132.224 4.608 166.784L768 885.824l-157.248 55.872 4.608-166.784L513.6 642.688l160-47.168zm0 150.912-41.088 59.968-69.76 20.608 44.352 57.6-1.984 72.64 68.48-24.32 68.48 24.32-1.984-72.64 44.288-57.6-69.76-20.608z" })))
        } />;
      }

      export default MapCollection;