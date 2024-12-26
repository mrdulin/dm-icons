// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../dm-icon';

      const LightningFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M9.525 0h-3.8c-.4 0-.8.3-1 .7l-2 7c-.2.7.3 1.3.9 1.3h3.7l-1.5 7 7.3-9.4c.5-.6 0-1.6-.8-1.6h-3l1.1-3.7c.2-.7-.3-1.3-.9-1.3" })))
        } />;
      }

      export default LightningFilled;