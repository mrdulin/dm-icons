// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const PenBallFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M731.968 58.624 965.44 292.096l-60.352 60.352-233.472-233.472zM612.48 179.456l232.192 232.192-528.96 527.04H85.376V708.48l527.04-528.96zm335.168 369.472L681.28 815.36l-60.352-60.352L887.296 488.64z" })))
        } />;
      }

      export default PenBallFilled;