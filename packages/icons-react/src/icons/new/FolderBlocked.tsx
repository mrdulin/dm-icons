// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const FolderBlocked = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M42.688 106.688h361.856l85.312 106.624h491.52v213.376H896v-128H448.832L363.52 192H128v618.688h362.688V896h-448zM789.376 576a149.312 149.312 0 0 0-131.392 220.416L860.416 593.92a148.54 148.54 0 0 0-71.04-17.92m131.392 78.272L718.272 856.704a149.312 149.312 0 0 0 202.432-202.432zm-366.08 71.04a234.688 234.688 0 1 1 469.312 0 234.688 234.688 0 0 1-469.312 0" })))
        } />;
      }

      export default FolderBlocked;