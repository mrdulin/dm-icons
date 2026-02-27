// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const CheckCircleOutlined = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 14 14", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M10.715 5.524 6.344 9.896l-3.09-3.088.929-.928 2.16 2.16 3.444-3.443z" }),
    React.createElement("path", { fillRule: "evenodd", d: "M7 .219A6.781 6.781 0 1 1 7 13.78 6.781 6.781 0 0 1 7 .22M7 1.53A5.469 5.469 0 1 0 7 12.47 5.469 5.469 0 0 0 7 1.53", clipRule: "evenodd" })))
        } />;
      }

      export default CheckCircleOutlined;