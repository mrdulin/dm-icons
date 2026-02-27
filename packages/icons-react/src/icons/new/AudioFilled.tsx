// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const AudioFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M373.312 640a138.688 138.688 0 1 1 277.376 0 138.688 138.688 0 0 1-277.376 0M896 42.688H128v938.624h768zM512 416a224 224 0 1 1 0 448 224 224 0 0 1 0-448m-42.88-202.88h85.568v85.568H469.12z" })))
        } />;
      }

      export default AudioFilled;