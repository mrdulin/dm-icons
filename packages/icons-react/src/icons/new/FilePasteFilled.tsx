// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const FilePasteFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M554.688 768v-85.312H640V768zM128 42.688h426.688V384H896v597.312H128zm281.6 384H298.688V537.6H384V512h25.6zm145.088 0H443.712V512h25.6v25.6h85.376zM384 571.712h-85.312v110.976H409.6v-85.376H384zm341.312 281.6v-256h-256v256zM896 280.96v17.728H640v-256h17.664z" })))
        } />;
      }

      export default FilePasteFilled;