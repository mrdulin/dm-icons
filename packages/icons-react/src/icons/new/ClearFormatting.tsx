// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const ClearFormatting = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "m598.656 80.576 412.032 412.032L654.656 848.64l-11.52 11.584h210.24v85.312h-565.44l-277.12-277.12L598.656 80.64zm13.76 689.664 277.632-277.632L598.656 201.28 307.328 492.608l291.328 291.328 13.696-13.76zm-365.44-217.28L131.52 668.416l191.744 191.808h199.68l15.616-15.744z" })))
        } />;
      }

      export default ClearFormatting;