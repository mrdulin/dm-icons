// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const FileExportFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M554.688 42.688H128v938.624h421.376A277.312 277.312 0 0 1 896 564.544V384H554.688zm341.312 256V280.96L657.664 42.688H640v256zm124.096 512.064L812.8 601.088l-60.672 59.968L857.92 768.064H554.56v85.376h303.36L752.128 960.448l60.672 59.968z" })))
        } />;
      }

      export default FileExportFilled;