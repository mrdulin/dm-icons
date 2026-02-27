// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const MenuUnfoldOutlined = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 14 14", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M1.167 2.333h11.666V3.5H1.167zm-.002 3.5h4.429l-2.215 2.48zm5.252.584h6.416v1.166H6.417zM1.167 10.5h11.666v1.166H1.167z" })))
        } />;
      }

      export default MenuUnfoldOutlined;