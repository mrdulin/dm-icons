// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const SaturationFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M813.504 301.632 512 2.944 210.432 301.632a420.48 420.48 0 0 0 0 598.592c166.592 164.992 436.48 164.992 603.072 0a420.48 420.48 0 0 0 0-598.592M768 597.184a256 256 0 0 1-256 256v-512a256 256 0 0 1 256 256" })))
        } />;
      }

      export default SaturationFilled;