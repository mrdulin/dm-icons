// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../dm-icon';

      const UserFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 10 10", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M7.083 2.917a2.083 2.083 0 1 0-4.166 0 2.083 2.083 0 0 0 4.166 0m1.459 5c0-1.15-.933-2.083-2.084-2.083H3.542c-1.151 0-2.084.932-2.084 2.083v.833h7.084z" })))
        } />;
      }

      export default UserFilled;