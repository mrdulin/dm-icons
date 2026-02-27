// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const WorkHistoryFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M320 106.688h384v170.624h234.624V522.88a298.688 298.688 0 0 0-429.376 394.496H85.312v-640H320V106.624zm85.312 170.624h213.312V192H405.312zm128 490.688a234.688 234.688 0 1 1 469.312 0 234.688 234.688 0 0 1-469.312 0m337.664 42.688-60.352-60.352V672h-85.312v113.6l85.312 85.376 60.352-60.352z" })))
        } />;
      }

      export default WorkHistoryFilled;