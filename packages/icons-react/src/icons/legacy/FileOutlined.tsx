// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const FileOutlined = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M9.444 0v4.364a1.45 1.45 0 0 0 1.445 1.454H14.5v8c0 1.205-.97 2.182-2.167 2.182H3.667A2.174 2.174 0 0 1 1.5 13.818V2.182C1.5.977 2.47 0 3.667 0zm1.445.467q.025.027.049.057l3.178 3.84h-3.227z" })))
        } />;
      }

      export default FileOutlined;