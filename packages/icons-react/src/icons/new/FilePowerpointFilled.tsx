// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const FilePowerpointFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M554.688 665.6h-85.376v-68.288h85.376zM128 42.688h426.688V384H896v597.312H128zM554.688 512H384v341.312h85.312v-102.4h85.376c47.104 0 85.312-38.208 85.312-85.312v-68.288C640 550.208 601.792 512 554.688 512M896 280.96v17.728H640v-256h17.664z" })))
        } />;
      }

      export default FilePowerpointFilled;