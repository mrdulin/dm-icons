// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const AnimationFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M704 597.312a277.312 277.312 0 1 0 0-554.624 277.312 277.312 0 0 0 0 554.624m27.456 84.288a362.688 362.688 0 0 1-389.12-389.056A277.312 277.312 0 1 0 731.456 681.6m-192 192A362.688 362.688 0 0 1 150.4 484.48 277.312 277.312 0 1 0 539.456 873.6" })))
        } />;
      }

      export default AnimationFilled;