// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const PenQuill = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M994.24 346.368 518.976 819.712l-231.104-29.696-156.736 156.672-60.352-60.352 156.544-156.544-31.616-230.784 472.96-474.944 77.504 246.912zm-330.432-52.992-34.24-109.12-343.616 344.96 17.152 124.8zM364.096 713.792l124.288 16L832.96 386.56l-108.672-33.024-360.192 360.192z" })))
        } />;
      }

      export default PenQuill;