// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../dm-icon';

      const SaveFilled2 = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 16 16", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M5.333 1.333v1.334h2V1.333z" }),
    React.createElement("path", { d: "M4 1.333V4h4.667V1.333h2.276l3.724 3.724v9.61H12V10H4v4.667H1.333V1.333z" }),
    React.createElement("path", { d: "M5.333 14.667h5.334v-3.334H5.333z" })))
        } />;
      }

      export default SaveFilled2;