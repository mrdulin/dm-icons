// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Building2Filled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M512 35.584 783.872 198.72l-43.904 73.152-14.592-8.768v78.208H298.688v-78.208l-14.656 8.768-43.904-73.152L512 35.52zm-42.688 135.04V256h85.504v-85.44h-85.504zm469.312 256.064H85.312v512h256V640h341.312v298.688h256zm-512 298.624v213.376h170.688V725.312z" })))
        } />;
      }

      export default Building2Filled;