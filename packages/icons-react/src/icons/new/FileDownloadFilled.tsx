// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const FileDownloadFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M552.177 40.177H150.588v883.41h436.706A261 261 0 0 1 873.412 514.53V361.412H552.177zm321.235 240.941v-16.685L649.096 40.177H632.47v240.941zm-40.177 566.573V562.176H752.94v285.515l-100.713-99.569-56.44 57.103 197.33 195.103 197.33-195.163-56.5-57.043z" })))
        } />;
      }

      export default FileDownloadFilled;