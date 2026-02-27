// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const NoticeOutlined = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M4 1.8A1.2 1.2 0 0 0 2.8 3v10A1.2 1.2 0 0 0 4 14.2h8a1.2 1.2 0 0 0 1.2-1.2V3A1.2 1.2 0 0 0 12 1.8zM4 0h8a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3m1.5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2m0 3h5a1 1 0 0 1 0 2h-5a1 1 0 1 1 0-2m0 3h3a1 1 0 0 1 0 2h-3a1 1 0 0 1 0-2" })))
        } />;
      }

      export default NoticeOutlined;