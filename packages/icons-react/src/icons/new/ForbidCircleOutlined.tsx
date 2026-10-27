// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const ForbidCircleOutlined = React.forwardRef<HTMLSpanElement, Omit<DMIconProps, 'icon'>>((props, ref) => {
        return <DMIcon ref={ref} {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 14 14", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M7 .219A6.781 6.781 0 1 1 7 13.78 6.781 6.781 0 0 1 7 .22M2.848 3.442a5.469 5.469 0 0 0 7.709 7.709zM7 1.532c-1.188 0-2.287.38-3.184 1.023l7.628 7.628A5.469 5.469 0 0 0 7 1.532", clipRule: "evenodd" })))
        } />;
      })

      export default ForbidCircleOutlined;