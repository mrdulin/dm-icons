// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const BookmarkChecked = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "m964.096 125.44-241.28 241.28-150.912-150.784 60.352-60.352 90.496 90.496L903.808 65.088zM170.688 128H512v85.312H256v599.744l256-182.848 256 182.848V426.688h85.376v552.256L512 735.104l-341.312 243.84z" })))
        } />;
      }

      export default BookmarkChecked;