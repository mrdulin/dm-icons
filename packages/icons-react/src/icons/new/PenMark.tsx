// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const PenMark = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "m1004.992 293.504-265.664-265.6-569.6 569.472-24.064 120.64 169.152 169.216 120.64-24.128 569.6-569.6zm-120.64 0L393.408 784.448l-50.56 10.112-104.576-104.576 10.112-50.56 490.88-490.88zM59.136 836.864l136.896 136.832 60.352-60.288-136.96-136.96L59.136 836.8z" })))
        } />;
      }

      export default PenMark;