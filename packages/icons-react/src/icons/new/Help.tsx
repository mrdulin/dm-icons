// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Help = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "m554.432 896.128-85.312-.256v-85.568h85.824zm-85.312-151.68V642.944c0-49.152 22.08-90.048 48.512-122.56 26.24-32.256 59.52-59.584 87.68-81.728a151.232 151.232 0 1 0-236.16-169.28l-14.208 40.192-80.448-28.416 14.208-40.256a236.608 236.608 0 1 1 369.408 264.768c-27.968 22.016-54.592 44.352-74.24 68.608-19.584 24-29.44 46.336-29.44 68.608v101.504H469.12z" })))
        } />;
      }

      export default Help;