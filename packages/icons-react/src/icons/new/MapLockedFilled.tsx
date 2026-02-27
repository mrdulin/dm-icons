// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const MapLockedFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M320 115.968 85.312 252.8v664.512L320 820.608zm85.312 690.88 85.312 50.368V704a277.12 277.12 0 0 1 128-233.728V217.216L405.312 91.2zm533.312-700.16v378.688A278.14 278.14 0 0 0 704 434.112v-230.72l234.688-96.704zm-32 544v32H960V960H576V682.688h53.376v-32a138.688 138.688 0 0 1 277.312 0zm-85.312 0a53.312 53.312 0 0 0-106.688 0v32h106.688z" })))
        } />;
      }

      export default MapLockedFilled;