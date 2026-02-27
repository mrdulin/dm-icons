// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const FolderShared = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M42.688 106.688h361.856l85.312 106.624h491.52V896H42.688zM128 192v618.688h768v-512H448.832L363.52 192zm384 256a42.688 42.688 0 1 1 0 85.312A42.688 42.688 0 0 1 512 448m102.4 119.488a128 128 0 1 0-204.8 0A170.43 170.43 0 0 0 341.376 704v42.688h85.312V704a85.312 85.312 0 1 1 170.688 0v42.688h85.312V704c0-55.808-26.816-105.408-68.224-136.512z" })))
        } />;
      }

      export default FolderShared;