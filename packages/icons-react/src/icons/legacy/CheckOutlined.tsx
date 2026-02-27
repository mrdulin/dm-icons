// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const CheckOutlined = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "m5.708 10.65 7.399-7.807a1.063 1.063 0 0 1 1.572.01 1.244 1.244 0 0 1-.01 1.678l-8.174 8.626a1.06 1.06 0 0 1-1.557.006l-3.602-3.75a1.244 1.244 0 0 1-.02-1.678 1.063 1.063 0 0 1 1.572-.02z" })))
        } />;
      }

      export default CheckOutlined;