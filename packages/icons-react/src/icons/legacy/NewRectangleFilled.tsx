// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const NewRectangleFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 10", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("rect", { width: 20, height: 10, fill: "currentColor", rx: 2 }),
    React.createElement("path", { fill: "#fff", d: "M6.5 8.001H5.3l-2.55-3.5v3.5H1.5v-6h1.25l2.5 3.5v-3.5H6.5zM11.5 3.261H9v1.12h2.5v1.26H9v1.11h2.5v1.25h-4v-6h4zM18.5 7.001c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1v-5h1.25v4.51h1.13v-3.52h1.25v3.51h1.12v-4.5h1.25z" })))
        } />;
      }

      export default NewRectangleFilled;