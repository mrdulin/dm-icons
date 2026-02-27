// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const LockTimeFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M768 448V298.688a256 256 0 0 0-512 0V448H149.312v490.688h381.312A298.688 298.688 0 0 1 874.688 503.04V448zM512 128a170.69 170.69 0 0 1 170.624 170.688V448H341.312V298.688A170.69 170.69 0 0 1 512 128m42.624 661.312a234.688 234.688 0 1 1 469.376 0 234.688 234.688 0 0 1-469.376 0M892.352 832 832 771.648V693.44h-85.376v113.536L832 892.352z" })))
        } />;
      }

      export default LockTimeFilled;