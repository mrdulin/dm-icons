// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const ChartStacked = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M170.624 85.312v768H256V384h256v469.312h85.312v-640h256v640h85.312v85.376H85.312V85.312zm597.376 768V704h-85.376v149.312zm-85.376-234.624H768v-320h-85.376zm-256 234.624V704h-85.312v149.312zm-85.312-234.624h85.312V469.312h-85.312z" })))
        } />;
      }

      export default ChartStacked;