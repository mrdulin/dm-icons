// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../dm-icon';

      const ClockCircleFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0m-.113 4C7.397 4 7 4.349 7 4.778v4.006c0 .462.28.89.736 1.124l1.93.986c.274.14.612.141.887.003.276-.138.446-.395.447-.673s-.167-.536-.441-.676l-1.786-.913V4.778c0-.429-.396-.778-.886-.778" })))
        } />;
      }

      export default ClockCircleFilled;