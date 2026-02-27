// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const AlignLeftOutlined = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M3 1h5a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2m0 4h10a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2m0 4h8a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2m0 4h10a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2" })))
        } />;
      }

      export default AlignLeftOutlined;