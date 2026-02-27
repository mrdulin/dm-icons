// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const UserCircleOutlined = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18m0 1.2a7.8 7.8 0 1 0 0 15.6 7.8 7.8 0 0 0 0-15.6m0 8.709c2.507 0 5.813 1.493 5.813 3.335s-11.625 1.841-11.625 0c0-1.842 3.305-3.335 5.812-3.335M12 6c1.605 0 2.906 1.418 2.906 3.166 0 1.75-1.3 3.167-2.906 3.167-1.605 0-2.906-1.418-2.906-3.167S10.394 6 12 6" })))
        } />;
      }

      export default UserCircleOutlined;