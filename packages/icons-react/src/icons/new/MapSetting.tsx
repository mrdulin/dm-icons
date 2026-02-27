// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const MapSetting = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M384 78.592 643.2 229.76l295.424-123.072v362.624h-85.312V234.624l-170.688 71.168v163.52h-85.312V301.824l-170.688-99.52v519.872l79.68 46.464-42.944 73.728-82.56-48.192L85.312 917.312V252.8zm-42.688 639.616V202.304l-170.688 99.52v487.488l170.688-71.04zM810.624 544v58.688c30.528 7.872 57.728 23.936 79.104 45.76l50.88-29.44 42.688 73.92-50.816 29.376a170.9 170.9 0 0 1 0 91.392l50.816 29.312-42.688 73.92-50.88-29.376c-21.376 21.76-48.64 37.888-79.104 45.696V992h-85.312v-58.752a170.5 170.5 0 0 1-79.104-45.696l-50.88 29.44-42.688-73.92 50.88-29.44a170.9 170.9 0 0 1 0-91.328l-50.88-29.376 42.688-73.92 50.88 29.44c21.376-21.824 48.64-37.888 79.104-45.76V544zM693.248 726.72a85.06 85.06 0 0 0 0 82.56l1.536 2.688a85.312 85.312 0 0 0 146.368 0l1.536-2.752a84.99 84.99 0 0 0 0-82.496l-1.536-2.688a85.312 85.312 0 0 0-146.368 0z" })))
        } />;
      }

      export default MapSetting;