// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const FlightLandingFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "m396.864 51.328 158.528 42.496 109.504 382.72 211.584 56.64a106.688 106.688 0 1 1-55.232 206.08L66.24 536.96l19.584-304 135.424 36.352 27.392 95.68 142.336 38.08L396.8 51.328zM85.312 810.688h853.376V896H85.312z" })))
        } />;
      }

      export default FlightLandingFilled;