// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../dm-icon';

      const IdCardFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M1 4.4V14c0 .88.72 1.6 1.6 1.6h12.8c.88 0 1.6-.72 1.6-1.6V4.4c0-.88-.72-1.6-1.6-1.6H2.6A1.6 1.6 0 0 0 1 4.4M5.8 6a1.6 1.6 0 1 1 0 3.2 1.6 1.6 0 0 1 0-3.2m-2.4 5.68c0-.798 1.6-1.2 2.4-1.2s2.4.402 2.4 1.2v.72H3.4zM13.8 8.4h-3.2a.8.8 0 0 1 0-1.6h3.2a.8.8 0 0 1 0 1.6m0 3.2h-3.2a.8.8 0 0 1 0-1.6h3.2a.8.8 0 0 1 0 1.6" })))
        } />;
      }

      export default IdCardFilled;