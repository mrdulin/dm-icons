// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const ArrowLeftRightCircleFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M981.376 512a469.312 469.312 0 1 0-938.688 0 469.312 469.312 0 0 0 938.688 0m-576-21.312v106.624h192v85.376h-192v106.624L213.376 640zM810.688 384l-192 149.312V426.688h-192v-85.376h192V234.688z" })))
        } />;
      }

      export default ArrowLeftRightCircleFilled;