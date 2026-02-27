// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Attach = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M482.752 132.864A213.312 213.312 0 0 1 784.448 434.56L452.48 766.464a128 128 0 0 1-180.992-181.056l331.84-331.84 60.352 60.352-331.904 331.84a42.688 42.688 0 1 0 60.352 60.352l331.904-331.84a128 128 0 0 0-181.056-181.056L211.2 525.12a213.312 213.312 0 0 0 301.696 301.696l362.048-362.048 60.352 60.352-362.048 361.984a298.688 298.688 0 0 1-422.4-422.4z" })))
        } />;
      }

      export default Attach;