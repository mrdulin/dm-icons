// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const UserMarked = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M490.624 170.688a149.312 149.312 0 1 0 0 298.624 149.312 149.312 0 0 0 0-298.624M256 320a234.688 234.688 0 1 1 469.312 0A234.688 234.688 0 0 1 256 320m373.312 256H992v439.232L810.752 903.616l-181.44 111.552zm85.312 85.312v201.216l96.192-59.136 95.808 59.008V661.312zm-373.312 21.376a170.69 170.69 0 0 0-170.688 170.624H544v85.376H85.312v-85.376a256 256 0 0 1 256-256H544v85.376z" })))
        } />;
      }

      export default UserMarked;