// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const ShieldErrorFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M85.312 512c0 176.064 108.096 299.2 208.896 375.616a842.7 842.7 0 0 0 198.4 110.72c4.8 1.792 9.728 3.52 14.592 5.184l4.8 1.664 4.8-1.664a584 584 0 0 0 27.84-10.432 842.7 842.7 0 0 0 185.152-105.536C830.528 811.136 938.624 688.064 938.624 512V168.128L512 18.816 85.312 168.128zm469.312-149.312H469.12V277.12h85.504v85.504zM469.312 704V426.688h85.312V704z" })))
        } />;
      }

      export default ShieldErrorFilled;