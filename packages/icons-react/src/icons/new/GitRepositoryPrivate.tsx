// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const GitRepositoryPrivate = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M234.688 320a277.312 277.312 0 0 1 554.624 0v64H896v597.312H128V384h106.688zM320 384h384v-64a192 192 0 0 0-384 0zm-106.688 85.312V896h597.376V469.312zm85.376 64.192h85.504V640h-85.504zm0 170.496h85.504v106.88h-85.504z" })))
        } />;
      }

      export default GitRepositoryPrivate;