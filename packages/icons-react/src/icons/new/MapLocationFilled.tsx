// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const MapLocationFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M320 115.968 85.312 252.8v664.512L320 820.608zm85.312 690.88L480 850.944v-136.32c0-104.32 55.488-195.776 138.624-246.272V217.216L405.312 91.2zm533.312-700.16v376A288.96 288.96 0 0 0 704 433.856v-230.4l234.688-96.768zM768 1011.264l-8.704-5.76a495 495 0 0 1-43.2-31.168 547.6 547.6 0 0 1-59.648-56.256c-42.496-46.656-91.136-118.016-91.136-203.392a202.688 202.688 0 0 1 405.312 0c0 85.376-48.64 156.8-91.072 203.392a548 548 0 0 1-79.616 71.552 603 603 0 0 1-23.296 15.936l-8.64 5.76zm53.312-328.576H714.624V768h106.688z" })))
        } />;
      }

      export default MapLocationFilled;