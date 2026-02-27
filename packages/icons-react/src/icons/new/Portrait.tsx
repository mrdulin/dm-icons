// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Portrait = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M85.312 85.312H384v85.376H170.624V384H85.312zm554.688 0h298.624V384h-85.312V170.688H640zM512 362.688a64 64 0 1 1 0 128 64 64 0 0 1 0-128m113.664 160.768a149.312 149.312 0 1 0-227.456 0A213.12 213.12 0 0 0 298.688 704v42.752H384V704a128 128 0 0 1 256 0v42.688h85.312V704a213.12 213.12 0 0 0-99.648-180.48zM170.624 640v213.376H384v85.376H85.312V640zm768 0v298.752H640v-85.376h213.312V640z" })))
        } />;
      }

      export default Portrait;