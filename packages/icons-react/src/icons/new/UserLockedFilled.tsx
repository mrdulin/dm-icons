// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const UserLockedFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M256 320a234.688 234.688 0 1 1 469.312 0A234.688 234.688 0 0 1 256 320m512 277.312c29.44 0 53.312 23.872 53.312 53.376v32H714.624v-32c0-29.44 23.872-53.376 53.376-53.376m138.624 85.376v-32a138.688 138.688 0 1 0-277.312 0v32h-53.376V960h384V682.688zm-416 256H85.312v-85.376a256 256 0 0 1 256-256h149.312z" })))
        } />;
      }

      export default UserLockedFilled;