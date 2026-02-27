// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const PyramidFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "m469.376 126.336 189.44 336.704 45.248-82.24 306.816 557.888H12.48l456.96-812.352zm72.192 727.04h119.808v-128h-49.408zm205.184 0H866.56l-70.4-128h-49.408zM749.248 640 704 557.888 658.88 640z" })))
        } />;
      }

      export default PyramidFilled;