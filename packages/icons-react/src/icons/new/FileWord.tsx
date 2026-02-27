// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const FileWord = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M128 42.688h529.664L896 280.96v700.288H128zM213.312 128v768h597.376V384h-256V128zM640 145.664v152.96h152.96L640 145.728zM426.688 469.312v213.376h42.624V469.312h85.376v213.376h42.624V469.312h85.376v213.376c0 47.104-38.208 85.312-85.376 85.312H426.688a85.31 85.31 0 0 1-85.376-85.312V469.312z" })))
        } />;
      }

      export default FileWord;