// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Percent = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M256 213.312a64 64 0 1 0 0 128 64 64 0 0 0 0-128m-149.312 64a149.312 149.312 0 1 1 298.688 0 149.312 149.312 0 0 1-298.688 0m764.352-64L213.376 871.04l-60.352-60.352L810.688 152.96l60.352 60.288zM768 682.688a64 64 0 1 0 0 128 64 64 0 0 0 0-128m-149.312 64a149.312 149.312 0 1 1 298.688 0 149.312 149.312 0 0 1-298.688 0" })))
        } />;
      }

      export default Percent;