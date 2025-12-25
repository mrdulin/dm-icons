// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../dm-icon';

      const InformationFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M16.632 17.474a.842.842 0 0 0 1.684 0V12A.842.842 0 1 1 20 12v5.474A2.526 2.526 0 0 1 17.474 20H6.526A2.526 2.526 0 0 1 4 17.474V5.684C4 4.754 4.754 4 5.684 4h9.263c.93 0 1.685.754 1.685 1.684zm-9.474-5.895a.632.632 0 1 0 0 1.263h6.316a.632.632 0 1 0 0-1.263zm0 2.526a.632.632 0 1 0 0 1.263h3.368a.632.632 0 0 0 0-1.263zm.21-7.579a.84.84 0 0 0-.842.842v1.685c0 .465.377.842.842.842h5.895a.84.84 0 0 0 .842-.842V7.368a.84.84 0 0 0-.842-.842z" })))
        } />;
      }

      export default InformationFilled;