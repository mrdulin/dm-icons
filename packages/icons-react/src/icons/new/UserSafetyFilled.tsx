// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const UserSafetyFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M256 320a234.688 234.688 0 1 1 469.312 0A234.688 234.688 0 0 1 256 320m362.624 256h384v240.384A128 128 0 0 1 944.64 923.52l-134.016 87.552-134.016-87.552a128 128 0 0 1-57.984-107.136zm-85.312 362.688h-448v-85.376a256 256 0 0 1 256-256h192z" })))
        } />;
      }

      export default UserSafetyFilled;