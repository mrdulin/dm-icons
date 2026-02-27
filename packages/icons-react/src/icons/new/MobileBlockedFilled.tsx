// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const MobileBlockedFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M170.688 42.688h682.688v97.664A298.8 298.8 0 0 0 768 128H256v597.312h512c29.696 0 58.304-4.288 85.376-12.352v268.352H170.688zm384.192 768h-85.504v85.504h85.504zM768 192a234.688 234.688 0 1 0 0 469.312A234.688 234.688 0 0 0 768 192M618.688 426.688a149.312 149.312 0 0 1 220.416-131.392L636.608 497.728a148.54 148.54 0 0 1-17.92-71.04M696.96 558.08l202.432-202.432A149.312 149.312 0 0 1 696.96 558.08" })))
        } />;
      }

      export default MobileBlockedFilled;