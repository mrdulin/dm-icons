// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const FileOutlook = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M128 42.688h529.664L896 280.96v700.288H128zM213.312 128v768h597.376V384h-256V128zM640 145.664v152.96h152.96L640 145.728zM362.688 512c0-47.104 38.208-85.312 85.312-85.312h128c47.104 0 85.312 38.208 85.312 85.312v170.688C661.312 729.792 623.104 768 576 768H448a85.31 85.31 0 0 1-85.312-85.312zM576 512H448v170.688h128z" })))
        } />;
      }

      export default FileOutlook;