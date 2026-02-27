// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const MapConnection = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M256 170.688a85.312 85.312 0 1 0 0 170.624 85.312 85.312 0 0 0 0-170.624M85.312 256a170.688 170.688 0 0 1 336-42.688H768a170.624 170.624 0 1 1 0 341.376H256a85.312 85.312 0 0 0 0 170.688h469.312V618.688L924.416 768 725.312 917.376V810.688H256a170.688 170.688 0 1 1 0-341.312h512a85.312 85.312 0 0 0 0-170.688H421.248A170.752 170.752 0 0 1 85.312 256" })))
        } />;
      }

      export default MapConnection;