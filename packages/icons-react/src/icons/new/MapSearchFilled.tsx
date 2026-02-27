// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const MapSearchFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M320 115.968 85.312 252.8v664.512L320 820.608zm85.312 690.88L512 869.76V693.312A266.24 266.24 0 0 1 618.624 480V217.216L405.312 91.2zm533.312-700.16V480A266.75 266.75 0 0 0 704 437.312V203.328l234.688-96.704zm42.688 586.688c0 40.448-11.904 78.208-32.32 109.824l71.36 71.552-60.416 60.288-71.296-71.488a202.688 202.688 0 1 1 92.672-170.24zm-85.312 0a117.312 117.312 0 1 0-34.624 83.2l.32-.32c21.12-21.248 34.304-50.56 34.304-82.88" })))
        } />;
      }

      export default MapSearchFilled;