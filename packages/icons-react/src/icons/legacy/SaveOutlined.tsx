// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const SaveOutlined = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 16 16", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M1.333 1.333h9.61l3.724 3.724v9.61H1.333zm1.334 1.334v10.666H4v-4h8v4h1.333V5.61L10.39 2.667H8.667v2.666H4V2.667zm2.666 0V4h2V2.667zm5.334 10.666v-2.666H5.333v2.666z" })))
        } />;
      }

      export default SaveOutlined;