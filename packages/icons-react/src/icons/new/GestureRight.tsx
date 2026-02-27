// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const GestureRight = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M832 323.008a128 128 0 1 1 0 256H682.688v62.272a128 128 0 0 1-17.472 64.448L562.432 881.92a128 128 0 0 1-151.04 56.96l-259.84-86.656A128 128 0 0 1 64 730.88V386.368a128 128 0 0 1 49.92-101.504L382.208 78.528l65.152 43.392c29.312 19.584 43.584 55.104 35.968 89.536l-24.832 111.552zm42.688 128A42.69 42.69 0 0 0 832 408.32H352.128L400 192.96l-14.208-9.472-219.776 169.024a42.69 42.69 0 0 0-16.64 33.856v344.448c0 18.368 11.712 34.688 29.12 40.512l259.84 86.592c19.2 6.4 40.256-1.536 50.432-18.944l102.784-176.192a42.7 42.7 0 0 0 5.76-21.504V493.632H832a42.69 42.69 0 0 0 42.688-42.624" })))
        } />;
      }

      export default GestureRight;