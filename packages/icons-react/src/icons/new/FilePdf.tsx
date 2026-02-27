// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const FilePdf = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M128 42.688h529.664L896 280.96v188.288h-85.312V384h-256V128H213.312v768H896v85.312H128zm512 103.04v152.96h152.96zM256 512h158.464c30.336 0 54.848 24.576 54.848 54.848v103.68a54.85 54.85 0 0 1-54.848 54.784h-73.152v128H256zm85.312 128H384v-42.688h-42.688zm149.376-128h158.464C679.424 512 704 536.576 704 566.848v231.68a54.85 54.85 0 0 1-54.848 54.784H490.688zM576 597.312V768h42.688V597.312zm149.312-30.464c0-30.272 24.576-54.848 54.848-54.848h144.256v85.312H810.688V640h113.728v85.312H810.688v128h-85.376z" })))
        } />;
      }

      export default FilePdf;