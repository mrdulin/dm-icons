// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const PenFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M963.2 390.272 630.144 57.216 552 199.872A298.7 298.7 0 0 1 393.216 336.64l-212.288 78.08-50.944 418.816L469.44 494.144l60.352 60.352-339.456 339.392 418.816-50.944 78.464-214.848a298.7 298.7 0 0 1 133.632-157.632z" })))
        } />;
      }

      export default PenFilled;