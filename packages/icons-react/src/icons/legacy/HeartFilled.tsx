// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const HeartFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M14.74 2.321a4.446 4.446 0 0 0-6.313 0l-.428.432-.415-.432a4.443 4.443 0 0 0-6.323 0c-1.74 1.757-1.65 4.725.09 6.482l.325.327 5.435 5.5a1.25 1.25 0 0 0 1.776 0l5.438-5.49.325-.328c1.737-1.753 1.83-4.72.09-6.49" })))
        } />;
      }

      export default HeartFilled;