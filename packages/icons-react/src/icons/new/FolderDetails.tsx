// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const FolderDetails = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M42.688 106.688h361.856l85.312 106.624h491.52V896H42.688zM128 192v618.688h768v-512H448.832L363.52 192zm170.624 320h85.504v85.504h-85.504v-85.568zm170.624 0h85.504v85.504h-85.504v-85.568zm170.688 0h85.504v85.504h-85.504v-85.568z" })))
        } />;
      }

      export default FolderDetails;