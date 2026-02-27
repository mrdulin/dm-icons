// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const MapMarkedFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M320 115.968 85.312 252.8v664.512L320 820.608zm85.312 690.88 96 56.704V426.688h117.312V217.216L405.312 91.2zm533.312-700.16v320H704V203.392zm10.688 405.184H586.624v439.104l181.504-111.552 181.184 111.68V511.808z" })))
        } />;
      }

      export default MapMarkedFilled;