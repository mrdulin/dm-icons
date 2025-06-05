// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../dm-icon';

      const SendOutlined = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { fill: "none", fillRule: "evenodd" },
        React.createElement("path", { d: "M0 0h24v24H0z" }),
        React.createElement("path", { fill: "currentColor", fillRule: "nonzero", d: "M21.585 2.413c.396.396.52.989.316 1.512l-6.709 17.11c-.227.587-.78.965-1.407.965h-.018a1.51 1.51 0 0 1-1.407-.996l-1.69-4.62a5.13 5.13 0 0 0-3.054-3.053l-4.62-1.69A1.505 1.505 0 0 1 2 10.232a1.51 1.51 0 0 1 .964-1.43l17.11-6.706a1.41 1.41 0 0 1 1.511.316M19.981 4.02l-15.79 6.19 4.028 1.475c.671.245 1.291.59 1.843 1.015l3.195-3.194a.875.875 0 0 1 1.237 1.238l-3.193 3.194a6.9 6.9 0 0 1 1.017 1.844l1.474 4.027z" }))))
        } />;
      }

      export default SendOutlined;