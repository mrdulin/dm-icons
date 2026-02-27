// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const FolderDetailsFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M404.48 106.688H42.752V896H981.44V213.312H489.92l-85.376-106.624zM298.688 511.936h85.504v85.504h-85.568v-85.504zm170.624 0h85.504v85.504h-85.568v-85.504zm256.192 0v85.504h-85.568v-85.504h85.504z" })))
        } />;
      }

      export default FolderDetailsFilled;