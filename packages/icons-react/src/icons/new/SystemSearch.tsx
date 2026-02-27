// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const SystemSearch = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M42.688 85.312h938.688v405.376H896v-320H128v512h384V768H42.688zm736 533.376a117.312 117.312 0 1 1 0 234.624 117.312 117.312 0 0 1 0-234.624m170.304 227.2a202.688 202.688 0 1 0-60.352 60.352L960 977.664l60.416-60.288-71.36-71.488zM128 853.312h384v85.376H128z" })))
        } />;
      }

      export default SystemSearch;