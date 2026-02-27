// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const ImageAdd = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M85.312 85.312h853.312V512h-85.312V170.688H170.624v408.96L384 366.336l231.04 231.04-60.416 60.288L384 487.04 170.624 700.416v152.96H512v85.376H85.312zm586.56 224a42.688 42.688 0 1 0 0 85.376 42.688 42.688 0 0 0 0-85.376m-128 42.688a128 128 0 1 1 256 0 128 128 0 0 1-256 0m309.44 245.312V768H1024v85.312H853.312V1024H768V853.312H597.312V768H768V597.312z" })))
        } />;
      }

      export default ImageAdd;