// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const SystemBlocked = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M42.688 85.312h938.688V448H896V170.688H128v512h362.688V768h-448zm746.688 512a149.312 149.312 0 0 0-131.392 220.416l202.432-202.432a148.54 148.54 0 0 0-71.04-17.92zm131.392 78.272L718.272 878.08a149.312 149.312 0 0 0 202.432-202.432zm-366.08 71.04a234.688 234.688 0 1 1 469.312 0 234.688 234.688 0 0 1-469.312 0M128 853.376h362.688v85.376H128z" })))
        } />;
      }

      export default SystemBlocked;