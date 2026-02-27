// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const SoundUp = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M640 55.04v913.92L244.8 746.688H42.688V277.312H244.8zM213.312 362.688H128v298.624h85.312zm85.312 316.352 256.064 144V200.96l-256 144v334.08zm512.064-337.728H896v128h128v85.376H896v128h-85.312v-128h-128v-85.376h128z" })))
        } />;
      }

      export default SoundUp;