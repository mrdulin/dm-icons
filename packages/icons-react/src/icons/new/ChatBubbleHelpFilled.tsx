// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const ChatBubbleHelpFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M512 42.688A469.312 469.312 0 0 0 150.208 810.88l-94.72 170.368H512a469.312 469.312 0 1 0 0-938.56m-80.448 334.208-14.272 40.192-80.448-28.416 14.272-40.256A170.688 170.688 0 1 1 617.6 539.52c-18.432 14.528-34.88 28.416-46.784 43.008-11.712 14.4-16.128 26.048-16.128 36.224v53.312h-85.312v-53.312c0-36.992 16.64-67.2 35.2-90.048 18.432-22.656 41.6-41.6 60.16-56.192a85.312 85.312 0 1 0-133.248-95.552zm123.264 337.792v85.504h-85.504v-85.504h85.568z" })))
        } />;
      }

      export default ChatBubbleHelpFilled;