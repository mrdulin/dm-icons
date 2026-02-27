// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const WorkOff = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M85.312 24.96 999.04 938.752l-60.352 60.352-81.664-81.728H85.312v-640h131.712l-192-192 60.288-60.288zm217.024 337.728H170.688V832h600.96zm17.92-256H704V277.44l234.688-.064.128 487.168-85.504-85.504V362.688l-316.288.064-85.44-85.504 167.04.192V192H405.376v69.184l-85.504-87.104.384-67.328z" })))
        } />;
      }

      export default WorkOff;