// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const UserOutlined = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 16 16", width: "1em", height: "1em", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: "currentColor", d: "M8 2.667a2.333 2.333 0 1 0 0 4.666 2.333 2.333 0 0 0 0-4.666M4.333 5a3.667 3.667 0 1 1 7.334 0 3.667 3.667 0 0 1-7.334 0M2 12.667a3.333 3.333 0 0 1 3.333-3.333h5.334A3.333 3.333 0 0 1 14 12.667v2H2zm3.333-2a2 2 0 0 0-2 2v.667h9.334v-.667a2 2 0 0 0-2-2z" })))
        } />;
      }

      export default UserOutlined;