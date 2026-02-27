// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const BookmarkCheckedFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "m571.904 215.936 150.848 150.848L964.096 125.44l-60.352-60.352L722.752 246.08l-90.496-90.496zm-38.528-2.624c0-30.08 5.632-58.88 16-85.312H170.688v850.944L512 735.104l341.376 243.84V432a234.688 234.688 0 0 1-320-218.688" })))
        } />;
      }

      export default BookmarkCheckedFilled;