// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const SystemBlockedFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M981.376 85.312H42.688V768h448.768a297.3 297.3 0 0 1 39.232-170.752H128V170.56h768v297.024a299.5 299.5 0 0 1 85.376 50.304zM128 853.312h382.272a299.5 299.5 0 0 0 50.304 85.376H128zM789.376 512a234.688 234.688 0 1 0 0 469.312 234.688 234.688 0 0 0 0-469.312M640 746.688a149.312 149.312 0 0 1 220.416-131.392L657.984 817.728a148.6 148.6 0 0 1-17.92-71.04zm78.272 131.392 202.496-202.496a149.312 149.312 0 0 1-202.432 202.432z" })))
        } />;
      }

      export default SystemBlockedFilled;