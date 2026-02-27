// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const FilePaste = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M128 42.688h529.664L896 280.96v700.288H128zM810.688 384h-256V128H213.312v768h597.376zM640 145.792v152.896h152.96zM298.688 426.688H409.6V512H384v25.6h-85.312zm145.024 0h110.976V537.6h-85.376V512h-25.6zM384 597.312v-25.6h-85.312v110.976H409.6v-85.376zm85.312 0h256v256h-256zm85.376 85.376V768H640v-85.312z" })))
        } />;
      }

      export default FilePaste;