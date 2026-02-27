// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const EditOutlined3 = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 14 14", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: "currentColor", d: "m9.583 1.145 3.273 3.273-8.416 8.416H1.167V9.56zm0 1.65L7.96 4.418 9.583 6.04l1.623-1.623zm-.825 4.07L7.135 5.244l-4.801 4.801v1.623h1.622zm4.207 5.969H7.398v-1.167h5.567z" })))
        } />;
      }

      export default EditOutlined3;