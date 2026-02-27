// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const HttpsFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M768 298.688V448h106.624v490.688H149.312V448H256V298.688a256 256 0 0 1 512 0m-426.688 0V448h341.312V298.688a170.688 170.688 0 1 0-341.312 0M512 608a85.312 85.312 0 1 0 0 170.688A85.312 85.312 0 0 0 512 608" })))
        } />;
      }

      export default HttpsFilled;