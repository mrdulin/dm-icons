// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const ListDoneOutlined = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { fill: "none" },
        React.createElement("path", { d: "M0 0h16v16H0z" }),
        React.createElement("path", { fill: "currentColor", d: "M11.75 1c.966 0 1.75.784 1.75 1.75v4a.75.75 0 1 1-1.5 0v-4a.25.25 0 0 0-.25-.25h-9a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25H7A.75.75 0 1 1 7 15H2.75A1.75 1.75 0 0 1 1 13.25V2.75C1 1.784 1.784 1 2.75 1zm-.11 7.28a3.36 3.36 0 1 1 0 6.72 3.36 3.36 0 0 1 0-6.72m1.078 2.202-1.36 1.552-.663-.65a.495.495 0 0 0-.692.706l1.037 1.017c.093.09.217.141.347.141h.018a.5.5 0 0 0 .354-.168l1.704-1.947a.495.495 0 0 0-.745-.651M6 9.75a.75.75 0 1 1 0 1.5H4.5a.75.75 0 1 1 0-1.5zm2-3a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1 0-1.5zm1.5-3a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1 0-1.5z" }))))
        } />;
      }

      export default ListDoneOutlined;