// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Api = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "m24.96 512 188.352-188.352L273.664 384l-128 128 128 128-60.352 60.352L25.024 512zm298.688-298.688L512 25.024l188.352 188.288L640 273.664l-128-128-128 128zM384 750.272l128 128 128-128 60.352 60.416L512 999.04 323.648 810.688 384 750.336zm85.248-195.52v-85.504h85.504v85.504zM750.336 640l128-128-128-128 60.352-60.352L999.04 512 810.688 700.352z" })))
        } />;
      }

      export default Api;