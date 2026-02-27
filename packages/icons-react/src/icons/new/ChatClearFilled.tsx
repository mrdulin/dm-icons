// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const ChatClearFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M960 85.312V768H293.376L64 968.704V85.312zm-448 280.96L391.296 245.696l-60.352 60.352 120.704 120.704L330.88 547.328l60.352 60.352L512 487.04l120.64 120.704 60.352-60.352-120.704-120.64 120.704-120.704-60.352-60.352L512 366.336z" })))
        } />;
      }

      export default ChatClearFilled;