// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const History = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M960 512a448 448 0 0 0-810.688-263.04V106.688H64v298.624h298.624V320h-158.4a364.6 364.6 0 0 1 136-127.488 362.688 362.688 0 1 1-188.928 357.76l-4.48-42.496-84.8 8.896 4.48 42.432A448 448 0 0 0 959.872 512zM469.312 256v273.664L618.624 679.04l60.352-60.352-124.352-124.352V256z" })))
        } />;
      }

      export default History;