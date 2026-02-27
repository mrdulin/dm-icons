// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const SoundLow = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M640 55.04v913.92L244.8 746.688H42.688V277.312H244.8zM213.312 362.688H128v298.624h85.312zm85.312 316.352 256.064 144V200.96l-256 144v334.08zm498.56-363.2 30.08 30.208a234.69 234.69 0 0 1 0 331.84l-30.08 30.208-60.416-60.352 30.208-30.208a149.31 149.31 0 0 0 0-211.2l-30.208-30.08 60.352-60.416z" })))
        } />;
      }

      export default SoundLow;