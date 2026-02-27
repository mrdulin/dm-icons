// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Heart = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M512.064 162.88A265.728 265.728 0 0 1 875.2 550.592L652.224 773.568 512 913.664 201.344 603.136l-52.48-52.608A265.728 265.728 0 0 1 512 162.88zm140.16 490.048 162.56-162.624a180.416 180.416 0 1 0-255.04-255.168L512 282.752l-47.616-47.68A180.416 180.416 0 0 0 209.216 490.24l52.544 52.544L512 793.024l140.16-140.16z" })))
        } />;
      }

      export default Heart;