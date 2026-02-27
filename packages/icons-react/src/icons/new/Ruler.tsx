// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Ruler = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M286.72 85.312h471.936l-192 768h372.032v85.376H73.408zm192 768 170.624-682.624h-296l-26.688 106.688h180.032v85.312H305.344l-26.688 106.688h180.032v85.312H257.344l-26.688 106.688h180.032v85.312H209.344l-26.688 106.688H478.72z" })))
        } />;
      }

      export default Ruler;