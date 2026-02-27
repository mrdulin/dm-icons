// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const KeyboardFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M981.376 128H42.688v768h938.688zM213.12 320h85.504v85.504h-85.44V320zm597.504 320v85.312H213.376V640h597.312zM469.376 320v85.504h-85.504V320zm85.12 0H640v85.504h-85.504zm256.192 0v85.504h-85.504V320zM213.184 448h85.504v85.504h-85.504zm256.192 0v85.504h-85.504V448zm85.12 0H640v85.504h-85.504zm256.192 0v85.504h-85.504V448z" })))
        } />;
      }

      export default KeyboardFilled;