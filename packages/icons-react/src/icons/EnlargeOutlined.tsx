// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../dm-icon';

      const EnlargeOutlined = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 16 16", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M12.581 7.158h-1.2v-1.69L8.13 8.722l-.424-.425-.424-.424 3.252-3.252h-1.69v-1.2h3.737z" }),
    React.createElement("path", { fillRule: "evenodd", d: "M14.982 14.982H1.017V1.017h13.965zM2.217 9.402h2.709c.966 0 1.75.783 1.75 1.75v2.63h7.106V2.217H2.217z", clipRule: "evenodd" })))
        } />;
      }

      export default EnlargeOutlined;