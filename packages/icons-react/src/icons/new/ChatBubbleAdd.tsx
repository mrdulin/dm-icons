// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const ChatBubbleAdd = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M512 128a384 384 0 0 0-278.912 647.936l21.504 22.72L200.512 896H512a384 384 0 0 0 0-768M42.688 512A469.312 469.312 0 1 1 512 981.312H55.488l94.72-170.368A467.58 467.58 0 0 1 42.688 512m512-170.688v128h128v85.376h-128v128h-85.312v-128h-128v-85.376h128v-128z" })))
        } />;
      }

      export default ChatBubbleAdd;