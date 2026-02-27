// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const UserBlockedFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M490.624 85.312a234.688 234.688 0 1 0 0 469.376 234.688 234.688 0 0 0 0-469.376M533.312 768a234.688 234.688 0 1 1 469.312 0 234.688 234.688 0 0 1-469.312 0M768 618.688A149.312 149.312 0 0 0 636.608 839.04L839.04 636.608a148.54 148.54 0 0 0-71.04-17.92m131.392 78.272L696.896 899.392A149.312 149.312 0 0 0 899.328 696.96zM522.88 597.312A297.3 297.3 0 0 0 469.248 768c0 63.424 19.84 122.24 53.504 170.688H85.312v-85.376a256 256 0 0 1 256-256h181.504z" })))
        } />;
      }

      export default UserBlockedFilled;