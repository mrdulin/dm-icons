// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const DataSearch = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M85.312 85.312h853.312v469.376h-768v298.688H576v85.312H85.312zm85.312 384h682.688V170.688H170.624zm85.248-192h85.504v85.568h-85.504zM800 704a74.688 74.688 0 1 0 0 149.312A74.688 74.688 0 0 0 800 704m-160 74.688a160 160 0 1 1 299.2 78.848l70.4 70.4-60.288 60.416-70.4-70.4A160 160 0 0 1 640 778.688M255.872 661.312h85.504v85.504h-85.504z" })))
        } />;
      }

      export default DataSearch;