// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const IdeaFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { fill: "none", fillRule: "evenodd" },
        React.createElement("path", { d: "M0 0h16v16H0z" }),
        React.createElement("path", { fill: "currentColor", d: "M9.94 13.875c.071 0 .129.056.129.125v.5c0 .277-.231.5-.518.5H6.45a.53.53 0 0 1-.366-.146.5.5 0 0 1-.151-.354V14c0-.07.058-.125.13-.125zM8 1c2.399 0 4.498 1.558 5.119 3.798s-.392 4.604-2.468 5.765v1.81c0 .277-.231.5-.517.5H5.866a.51.51 0 0 1-.517-.499v-1.81C3.273 9.403 2.26 7.04 2.881 4.8 3.501 2.56 5.601 1.002 8 1M9.67 3H6.927a.366.366 0 0 0-.36.298l-.73 3.884a.366.366 0 0 0 .359.434h1.041l-.35 2.976a.366.366 0 0 0 .684.219l2.552-4.62a.366.366 0 0 0-.32-.543h-1.12l1.298-2.09A.366.366 0 0 0 9.67 3" }))))
        } />;
      }

      export default IdeaFilled;