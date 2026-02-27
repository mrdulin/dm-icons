// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const SystemStorage = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M362.624 170.688v154.624h106.688V170.688zm192 0v240H277.312v-240H170.624v682.624h682.688V385.664l-215.04-215.04h-83.584zm119.04-85.312 264.96 264.96v588.352H85.312V85.376zm-375.04 512V512h426.688v85.312H298.624zm0 128V640h256v85.312h-256z" })))
        } />;
      }

      export default SystemStorage;