// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const InternetFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M628.096 966.848a469.7 469.7 0 0 0 351.36-412.16H766.848a811.14 811.14 0 0 1-138.752 412.16m351.296-497.536A469.7 469.7 0 0 0 627.904 57.088a811.2 811.2 0 0 1 138.944 412.224zM396.096 57.088A469.7 469.7 0 0 0 44.544 469.312h212.544A811.14 811.14 0 0 1 396.16 57.088zm-351.552 497.6a469.7 469.7 0 0 0 351.36 412.16 811.14 811.14 0 0 1-138.816-412.16H44.608zM512 979.712C413.44 860.928 351.936 714.24 342.528 554.688h338.88C672.064 714.24 610.432 860.928 512 979.712m0-935.168c98.368 118.72 160 265.28 169.408 424.768H342.592C351.936 309.824 413.632 163.264 512 44.544" })))
        } />;
      }

      export default InternetFilled;