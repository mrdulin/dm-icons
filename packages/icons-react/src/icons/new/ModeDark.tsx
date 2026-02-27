// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const ModeDark = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M675.968 142.72 615.04 176l60.928 33.28 33.344 60.992 33.28-60.928L803.584 176l-60.928-33.28-33.344-60.992-33.28 60.928zm-231.744 34.688A341.44 341.44 0 0 0 512 853.312a341.25 341.25 0 0 0 295.68-170.688 384 384 0 0 1-381.056-384c0-41.728 5.632-82.56 17.6-121.216M85.312 512A426.69 426.69 0 0 1 512 85.312h73.92l-36.992 64C524.16 192.128 512 242.816 512 298.752a298.688 298.688 0 0 0 356.16 293.12l71.744-13.952-23.104 69.376A426.688 426.688 0 0 1 85.376 512zm789.312-238.272 39.04 71.296L984.832 384l-71.296 39.04-38.976 71.232-38.976-71.296L764.416 384l71.232-38.976 39.04-71.296z" })))
        } />;
      }

      export default ModeDark;