// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const ChatMessageOutlined = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "currentColor", viewBox: "0 0 14 14", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M.875 13.244V1.167h12.25V10.5H4.011zm1.167-2.571 1.53-1.34h8.386v-7H2.042zm5.544-4.256h-1.17v-1.17h1.17zm-2.917 0H3.5v-1.17h1.169zm5.833 0H9.333v-1.17h1.17z" })))
        } />;
      }

      export default ChatMessageOutlined;