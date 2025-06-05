// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../dm-icon';

      const FundOutlined = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { fill: "none", fillRule: "evenodd" },
        React.createElement("path", { d: "M0 0h16v16H0z" }),
        React.createElement("path", { fill: "currentColor", fillRule: "nonzero", d: "M13 1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm0 1.1H3a.9.9 0 0 0-.9.9v7a.9.9 0 0 0 .9.9h10a.9.9 0 0 0 .9-.9V3a.9.9 0 0 0-.9-.9m.08.96a.55.55 0 0 1 .11.77l-3 4a.55.55 0 0 1-.686.162l-3.099-1.55L3.932 9.59a.55.55 0 0 1-.689.147l-.083-.055a.55.55 0 0 1-.092-.772l2.75-3.5a.55.55 0 0 1 .678-.152l3.089 1.545L12.31 3.17a.55.55 0 0 1 .77-.11m1.17 10.84a.55.55 0 0 1 0 1.1H1.75a.55.55 0 0 1 0-1.1z" }))))
        } />;
      }

      export default FundOutlined;