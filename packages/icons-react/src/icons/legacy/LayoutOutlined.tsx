// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const LayoutOutlined = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M2.4 16A2.4 2.4 0 0 1 0 13.6V2.4A2.4 2.4 0 0 1 2.4 0h11.2A2.4 2.4 0 0 1 16 2.4v11.2a2.4 2.4 0 0 1-2.4 2.4zm2.4-9.6H1.6v7.2a.8.8 0 0 0 .8.8h2.4zm9.6 0h-8v8h7.2a.8.8 0 0 0 .8-.8zm-.8-4.8H2.4a.8.8 0 0 0-.8.8v2.4h12.8V2.4a.8.8 0 0 0-.8-.8" })))
        } />;
      }

      export default LayoutOutlined;