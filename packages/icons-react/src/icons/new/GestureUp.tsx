// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const GestureUp = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M309.312 192a128 128 0 1 1 256 0v149.312h62.272a128 128 0 0 1 64.512 17.472l176.192 102.784a128 128 0 0 1 56.96 151.04l-86.656 259.84A128 128 0 0 1 717.184 960H372.672a128 128 0 0 1-101.44-49.92L64.896 641.792l43.392-65.152a85.31 85.31 0 0 1 89.536-35.968l111.488 24.832zm128-42.688A42.69 42.69 0 0 0 394.688 192v479.872L179.2 624l-9.472 14.208 169.088 219.776a42.6 42.6 0 0 0 33.792 16.64H717.12a42.69 42.69 0 0 0 40.448-29.12l86.656-259.84a42.69 42.69 0 0 0-19.008-50.432L649.024 432.448a42.7 42.7 0 0 0-21.504-5.76H480V192a42.69 42.69 0 0 0-42.688-42.688" })))
        } />;
      }

      export default GestureUp;