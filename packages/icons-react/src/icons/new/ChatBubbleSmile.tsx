// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const ChatBubbleSmile = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "m355.52 580.224-17.024-39.04-78.208 34.112 17.088 39.104a256 256 0 0 0 469.312 0l17.088-39.04-78.144-34.24-17.088 39.104a170.688 170.688 0 0 1-312.96 0zM512 42.688A469.312 469.312 0 0 0 150.208 810.88l-94.72 170.368H512a469.312 469.312 0 0 0 0-938.56M128 512a384 384 0 1 1 384 384H200.512l54.08-97.344-21.504-22.72A382.53 382.53 0 0 1 128 512" })))
        } />;
      }

      export default ChatBubbleSmile;