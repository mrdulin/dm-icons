// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const FolderExport = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M42.688 106.688h361.856l85.312 106.624h491.52v341.376H896v-256H448.832L363.52 192H128v618.688h362.688V896h-448zM812.8 558.4l207.36 209.664L812.8 977.792l-60.672-60.032L857.92 810.752H554.56V725.44h303.36L752.128 618.432z" })))
        } />;
      }

      export default FolderExport;