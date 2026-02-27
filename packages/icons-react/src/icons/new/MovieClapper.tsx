// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const MovieClapper = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M85.312 85.312h853.312v853.376H85.312zm85.312 85.376v170.624H378.24L235.968 170.688h-65.28zm176.448 0L489.28 341.312h187.584L534.656 170.688zm298.688 0 142.208 170.624h65.344V170.688zm207.552 256H170.624v426.624h682.688zM640 597.312H384V512h256z" })))
        } />;
      }

      export default MovieClapper;