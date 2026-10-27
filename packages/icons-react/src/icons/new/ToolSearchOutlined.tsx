// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const ToolSearchOutlined = React.forwardRef<HTMLSpanElement, Omit<DMIconProps, 'icon'>>((props, ref) => {
        return <DMIcon ref={ref} {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 16 16", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: "currentColor", d: "M11.167 8a3.167 3.167 0 0 1 2.66 4.885l1.115 1.114-.941.943-1.117-1.114A3.167 3.167 0 1 1 11.167 8m-.166-3.666h3.666v3h-1.333V5.667H2.667V13h4.667v1.334h-6v-10h3.667V1.667h6zm.166 4.999a1.834 1.834 0 1 0 .001 3.669 1.834 1.834 0 0 0-.001-3.669M6.334 4.334h3.333V3H6.334z" })))
        } />;
      })

      export default ToolSearchOutlined;