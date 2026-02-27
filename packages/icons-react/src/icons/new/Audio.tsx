// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Audio = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M128 42.688h768v938.624H128zM213.312 128v768h597.376V128zm255.872 85.12h85.504v85.568H469.12V213.12zM512 469.376a128 128 0 1 0 0 256 128 128 0 0 0 0-256m-213.312 128a213.312 213.312 0 1 1 426.624 0 213.312 213.312 0 0 1-426.624 0" })))
        } />;
      }

      export default Audio;