// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const TableFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M85.312 938.688h853.312V85.312H85.312zm85.312-85.376V640h170.688v213.312zm256 0V640h170.688v213.312zm256 0V640h170.688v213.312zm170.688-298.624H682.624V341.312h170.688zM170.624 341.312h170.688v213.376H170.624zm256 213.376V341.312h170.688v213.376z" })))
        } />;
      }

      export default TableFilled;