// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const FileRestore = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M128 42.688h529.664L896 280.96V512h-85.312V384h-256V128H213.312v768H512v85.312H128zm512 103.04v152.96h152.96zm145.664 408.96-42.624 42.624H768a213.312 213.312 0 1 1-213.312 213.376V768H640v42.688a128 128 0 1 0 128-128h-24.96l42.624 42.624-60.352 60.352L579.648 640l145.664-145.664z" })))
        } />;
      }

      export default FileRestore;