// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const AirplayWave = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M42.688 128h938.688v725.312H746.688V768H896V213.312H128L128.064 768h149.312v85.312H42.752zm680.576 443.008a298.69 298.69 0 0 0-422.4 0l-30.144 30.144-60.352-60.288 30.144-30.208a384 384 0 0 1 543.04 0l30.208 30.208-60.352 60.288zM602.56 691.648a128 128 0 0 0-181.056 0l-30.144 30.208-60.352-60.352 30.208-30.144a213.31 213.31 0 0 1 301.696 0l30.144 30.08-60.352 60.416zm-90.56 80 167.04 167.04H344.96z" })))
        } />;
      }

      export default AirplayWave;