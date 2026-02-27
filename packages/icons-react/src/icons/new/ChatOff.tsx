// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const ChatOff = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M999.04 938.688 85.312 25.024 25.024 85.376l39.04 39.04v844.352L293.312 768h414.272l231.04 231.04 60.352-60.416zm-376.704-256H261.312l-112 97.984V209.728zM960.128 768 960 85.312l-548.096.064-145.792-.128 85.504 85.44h523.072v511.808z" })))
        } />;
      }

      export default ChatOff;