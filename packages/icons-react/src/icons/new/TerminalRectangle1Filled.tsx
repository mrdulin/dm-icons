// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const TerminalRectangle1Filled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M981.376 341.568V128H42.688v213.568zm0 84.928H42.688V896h938.688zm-682.688 89.088 145.664 145.664-145.664 145.664-60.352-60.352 85.376-85.312-85.376-85.376zM512 703.936h256v85.312H512v-85.376z" })))
        } />;
      }

      export default TerminalRectangle1Filled;