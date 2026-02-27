// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const ChatMessage = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M64 968.704V85.312h896V768H293.376zm85.312-188.032 112-97.984h613.376v-512H149.312v609.92zM554.88 469.248h-85.568v-85.44h85.568v85.504zm-213.312 0H256v-85.44h85.504v85.504zm426.688 0h-85.504v-85.44h85.504v85.504z" })))
        } />;
      }

      export default ChatMessage;