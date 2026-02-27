// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const MarkAsUnread = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M405.312 57.152 735.744 251.52l-43.264 73.6-287.168-168.96-320 188.224v508.928H0V295.68zM170.688 384h810.624v597.312H170.688zm170.304 85.312L576 630.912l235.008-161.6zM896 514.432 576 734.464 256 514.432V896h640z" })))
        } />;
      }

      export default MarkAsUnread;