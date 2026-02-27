// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const UserSetting = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M490.624 170.688a149.312 149.312 0 1 0 0 298.624 149.312 149.312 0 0 0 0-298.624M256 320a234.688 234.688 0 1 1 469.312 0A234.688 234.688 0 0 1 256 320m85.312 362.688a170.69 170.69 0 0 0-170.688 170.624h343.488v85.376h-428.8v-85.376a256 256 0 0 1 256-256H512v85.376zM832 544v58.688c30.464 7.872 57.664 23.936 79.104 45.76l50.88-29.44 42.624 73.92-50.816 29.376a170.9 170.9 0 0 1 0 91.392l50.816 29.376-42.624 73.856-50.88-29.376c-21.44 21.76-48.64 37.888-79.104 45.76V992h-85.376v-58.688a170.5 170.5 0 0 1-79.104-45.76l-50.88 29.44-42.624-73.92 50.816-29.44a170.9 170.9 0 0 1 0-91.328l-50.816-29.376 42.624-73.856 50.88 29.376c21.44-21.76 48.64-37.888 79.104-45.76V544zM714.56 726.72a84.93 84.93 0 0 0 0 82.56l1.6 2.688a85.312 85.312 0 0 0 146.304 0l1.536-2.752a84.99 84.99 0 0 0 0-82.496l-1.536-2.688a85.248 85.248 0 0 0-146.304 0l-1.536 2.688z" })))
        } />;
      }

      export default UserSetting;