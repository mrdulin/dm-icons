// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Column = React.forwardRef<HTMLSpanElement, Omit<DMIconProps, 'icon'>>((props, ref) => {
        return <DMIcon ref={ref} {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 16 16", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M11.5 1a.7.7 0 0 1 .7.7v8.4H15v2.8a2.1 2.1 0 0 1-2.1 2.1H3.1A2.1 2.1 0 0 1 1 12.9V1.7a.7.7 0 0 1 .7-.7zm.7 11.9a.699.699 0 0 0 1.4 0v-1.4h-1.4zM3 12h4v-1H3zm0-2h7V9H3zm2.624-6.025-2.179.317 1.577 1.537L4.65 8 6.6 6.976 8.549 8l-.372-2.17 1.577-1.538-2.18-.317L6.6 2z" })))
        } />;
      })

      export default Column;