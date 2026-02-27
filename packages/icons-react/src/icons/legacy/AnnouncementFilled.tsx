// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const AnnouncementFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M19.304 10.565c.385 0 .696.282.696.63v8.176c0 .348-.311.629-.696.629H4.696C4.31 20 4 19.719 4 19.371v-8.177c0-.347.311-.629.696-.629ZM12 4c.915 0 1.683.655 1.85 1.535l3.612 4.335h-2.207L13.173 7.37a1.874 1.874 0 0 1-2.346 0L8.745 9.87H6.538l3.612-4.335A1.885 1.885 0 0 1 12 4" })))
        } />;
      }

      export default AnnouncementFilled;