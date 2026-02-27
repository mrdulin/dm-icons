// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Code = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "m24.96 483.712 211.2-211.2 60.352 60.352-150.848 150.848L296.512 634.56l-60.352 60.352zm349.952 372.416 191.36-765.44 82.816 20.672-191.36 765.44zM727.488 634.56l150.848-150.848-150.848-150.848 60.352-60.352 211.2 211.2-211.2 211.2z" })))
        } />;
      }

      export default Code;