// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Moon = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M444.224 177.408A341.44 341.44 0 0 0 512 853.376a341.25 341.25 0 0 0 295.68-170.688 384 384 0 0 1-381.056-384c0-41.792 5.632-82.624 17.6-121.28M85.312 512A426.69 426.69 0 0 1 512 85.312h73.92l-36.992 64.064C524.16 192.064 512 242.688 512 298.688a298.688 298.688 0 0 0 356.16 293.12l71.744-13.952-23.104 69.376A426.688 426.688 0 0 1 85.376 512z" })))
        } />;
      }

      export default Moon;