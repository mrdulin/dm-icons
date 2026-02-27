// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const CloseOutlined = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "m8 6.943 2.724-2.724a.747.747 0 1 1 1.057 1.057L9.057 8l2.724 2.724a.747.747 0 1 1-1.057 1.057L8 9.057l-2.724 2.724a.747.747 0 1 1-1.057-1.057L6.943 8 4.219 5.276a.747.747 0 0 1 1.057-1.057z" })))
        } />;
      }

      export default CloseOutlined;