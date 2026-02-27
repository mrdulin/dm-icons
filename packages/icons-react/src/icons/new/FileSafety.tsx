// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const FileSafety = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M128 42.688h529.664L896 280.96v209.664h-85.312V384h-256V128H213.312v768h277.376v85.312H128zm512 103.04v152.96h152.96zM575.936 576h384v240.384a128 128 0 0 1-58.048 107.136L768 1011.072 633.92 923.52a128 128 0 0 1-57.984-107.136zm85.312 85.312v155.072c0 14.4 7.296 27.84 19.328 35.712l87.36 57.024 87.296-57.024a42.69 42.69 0 0 0 19.328-35.712V661.312z" })))
        } />;
      }

      export default FileSafety;