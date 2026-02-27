// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Calendar2Filled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M341.312 170.688h341.312v-128H768v128h170.624V384H85.312V170.688H256v-128h85.312zm597.312 298.816v469.12H85.312v-469.12zM480.256 849.28 721.664 608l-60.352-60.352-181.056 181.056-90.496-90.624-60.352 60.352z" })))
        } />;
      }

      export default Calendar2Filled;