// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../dm-icon';

      const FontItalicOutlined = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { fill: "none" },
        React.createElement("path", { d: "M0 0h16v16H0z" }),
        React.createElement("path", { fill: "currentColor", d: "M5.643 1.778c0-.43.352-.778.786-.778h6.285c.434 0 .786.348.786.778s-.352.778-.786.778h-2.53l-2.75 10.888h2.137c.434 0 .786.349.786.778s-.352.778-.786.778H3.286a.78.78 0 0 1-.786-.778c0-.43.352-.778.786-.778h2.53l2.75-10.888H6.429a.78.78 0 0 1-.786-.778" }))))
        } />;
      }

      export default FontItalicOutlined;