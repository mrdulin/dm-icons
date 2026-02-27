// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const MenuFoldOutlined = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 14 14", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M1.167 2.333h11.666V3.5H1.167zm0 2.453L3.647 7l-2.48 2.214zm4.083 1.63h7.583v1.167H5.25zM1.167 10.5h11.666v1.166H1.167z" })))
        } />;
      }

      export default MenuFoldOutlined;