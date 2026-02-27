// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Castle2Filled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M469.376 131.52V85.312h85.312v46.208A256.064 256.064 0 0 1 768 384a213.31 213.31 0 0 1 213.376 213.312v341.376H554.688V640h-85.312v298.688H42.688V597.312A213.31 213.31 0 0 1 256 384a256.064 256.064 0 0 1 213.376-252.48M896 597.312a128 128 0 0 0-128-128v384h128zm-768 256h128v-384a128 128 0 0 0-128 128z" })))
        } />;
      }

      export default Castle2Filled;