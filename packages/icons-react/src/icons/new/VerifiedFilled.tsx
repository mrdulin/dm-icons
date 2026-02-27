// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const VerifiedFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M666.304 139.456 512 7.936 357.696 139.52l-202.176 16-16.128 202.112L7.936 512l131.52 154.304 16.128 202.112 202.112 16.128 154.24 131.52 154.368-131.52 202.112-16.128 16.128-202.112L1016.064 512 884.48 357.696l-16.128-202.112-202.112-16.128zM469.312 700.352 280.96 512l60.352-60.352 128 128L704 345.024l60.352 60.288z" })))
        } />;
      }

      export default VerifiedFilled;