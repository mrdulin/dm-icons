// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const FileOutlined3 = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 27 34", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M25.284 33.903H1.404C.63 33.903 0 33.243 0 32.43V1.474C0 .66.629 0 1.405 0H18.26l8.428 8.844V32.43c0 .814-.629 1.474-1.405 1.474" }),
    React.createElement("path", { d: "M18.26 0v7.37c0 .815.63 1.474 1.406 1.474h7.023z" })))
        } />;
      }

      export default FileOutlined3;