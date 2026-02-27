// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const AlignTop = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M128 128h768v85.312H128zm384 110.336-30.144 30.144-170.688 170.688-30.144 30.144 60.288 60.352 30.208-30.144 97.792-97.856V896h85.376V401.664l97.792 97.856 30.208 30.144 60.352-60.352-30.208-30.144L542.144 268.48z" })))
        } />;
      }

      export default AlignTop;