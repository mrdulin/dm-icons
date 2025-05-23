// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../dm-icon';

      const LayoutTopBottomOutlined = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { fill: "currentColor" },
        React.createElement("rect", { width: 8, height: 18, x: 5, y: -5, rx: 1, transform: "rotate(90 9 4)" }),
        React.createElement("rect", { width: 8, height: 18, x: 5, y: 5, rx: 1, transform: "rotate(90 9 14)" }))))
        } />;
      }

      export default LayoutTopBottomOutlined;