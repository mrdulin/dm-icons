// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../dm-icon';

      const CaretUpOutlined = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M2.302 13a1.35 1.35 0 0 1-.759-.231c-.584-.398-.718-1.169-.299-1.723l5.698-7.531a1.3 1.3 0 0 1 .3-.284c.583-.397 1.397-.27 1.816.284l5.698 7.531c.159.21.244.462.244.72 0 .681-.583 1.234-1.302 1.234z" })))
        } />;
      }

      export default CaretUpOutlined;