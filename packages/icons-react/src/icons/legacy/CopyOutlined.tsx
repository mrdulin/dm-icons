// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const CopyOutlined = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M20.8 19.2V9.6A1.6 1.6 0 0 0 19.2 8H9.6A1.6 1.6 0 0 0 8 9.6v9.6a1.6 1.6 0 0 0 1.6 1.6h9.6a1.6 1.6 0 0 0 1.6-1.6M9.6 9.6h9.6v9.6H9.6zm12.8 1.6v9.6a1.6 1.6 0 0 1-1.6 1.6h-9.6a1.6 1.6 0 0 0 1.6 1.6h8a3.2 3.2 0 0 0 3.2-3.2v-8a1.6 1.6 0 0 0-1.6-1.6" })))
        } />;
      }

      export default CopyOutlined;