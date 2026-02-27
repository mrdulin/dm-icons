// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Cloud = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M469.376 213.312A213.312 213.312 0 0 0 259.584 465.92l7.488 40.256-39.872 9.152A128.064 128.064 0 0 0 256 768h469.376a170.688 170.688 0 1 0-2.88-341.312l-36.672.64-6.08-36.224a213.376 213.376 0 0 0-210.368-177.792M170.688 426.688a298.688 298.688 0 0 1 585.472-83.52 256 256 0 0 1-30.784 510.144H256a213.312 213.312 0 0 1-84.8-409.088 303 303 0 0 1-.512-17.536" })))
        } />;
      }

      export default Cloud;