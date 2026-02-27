// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const FlightTakeoffFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M355.2 101.888 641.344 378.56l211.584-56.704a106.688 106.688 0 1 1 55.232 206.08L153.152 730.24 18.112 457.216 153.6 420.928l71.552 69.12 142.336-38.08L196.672 144.32l158.592-42.432zm-269.888 708.8h853.312V896H85.312z" })))
        } />;
      }

      export default FlightTakeoffFilled;