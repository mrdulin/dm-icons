// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const TextformatBold = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M256 128h-42.688v768h384a213.312 213.312 0 0 0 103.936-399.68A213.312 213.312 0 0 0 554.688 128zm298.624 341.312h-256v-256h256a128 128 0 0 1 0 256m-256 85.376h298.688a128 128 0 1 1 0 256H298.624z" })))
        } />;
      }

      export default TextformatBold;