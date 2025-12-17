// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../dm-icon';

      const ShrinkOutlined = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 16 16", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "m11.981 4.02.424.424-3.252 3.252h1.69v1.2H7.107V5.158h1.2v1.69l3.252-3.252z" }),
    React.createElement("path", { d: "M14.982 14.982H1.017V1.017h13.965zM2.217 9.402h2.709c.966 0 1.75.783 1.75 1.75v2.63h7.106V2.217H2.217z", clipRule: "evenodd" })))
        } />;
      }

      export default ShrinkOutlined;