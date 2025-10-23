// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../dm-icon';

      const DeleteOutlined = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 14 14", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: "currentColor", d: "M4.375.583h5.25v1.75h3.208V3.5H11.65l-.292 9.917H2.642L2.35 3.5H1.167V2.333h3.208zm1.167 1.75h2.916V1.75H5.542zM3.517 3.5l.258 8.75h6.45l.258-8.75zm4.066 1.167v6.416H6.417V4.667z" })))
        } />;
      }

      export default DeleteOutlined;