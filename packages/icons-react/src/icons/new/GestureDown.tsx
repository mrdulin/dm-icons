// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const GestureDown = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M323.008 832a128 128 0 1 0 256 0V682.688h62.272a128 128 0 0 0 64.512-17.472l176.192-102.784a128 128 0 0 0 56.96-151.04l-86.656-259.84A128 128 0 0 0 730.88 64H386.368a128 128 0 0 0-101.44 49.92L78.592 382.272l43.392 65.152c19.52 29.312 55.104 43.584 89.472 35.968l111.552-24.832zm128 42.688A42.69 42.69 0 0 1 408.384 832V352.128L192.96 400l-9.472-14.208 169.088-219.776a42.69 42.69 0 0 1 33.792-16.64H730.88a42.61 42.61 0 0 1 40.448 29.12l86.656 259.84c6.4 19.2-1.536 40.256-19.008 50.432L662.784 591.552a42.7 42.7 0 0 1-21.504 5.76H493.696V832a42.69 42.69 0 0 1-42.688 42.688" })))
        } />;
      }

      export default GestureDown;