// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../dm-icon';

      const LayoutLeftOneRightThreeOutlined = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { fill: "currentColor", transform: "rotate(-90 9 9)" },
        React.createElement("rect", { width: 4.5, height: 8, y: 10, rx: 1 }),
        React.createElement("rect", { width: 4.5, height: 8, x: 13.5, y: 10, rx: 1 }),
        React.createElement("rect", { width: 4.5, height: 8, x: 6.75, y: 10, rx: 1 }),
        React.createElement("rect", { width: 18, height: 8, rx: 1 }))))
        } />;
      }

      export default LayoutLeftOneRightThreeOutlined;