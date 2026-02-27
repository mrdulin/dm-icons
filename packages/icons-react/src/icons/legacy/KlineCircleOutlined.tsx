// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const KlineCircleOutlined = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { viewBox: "0 0 24 24", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M12 1.3c5.251 0 9.619 3.782 10.527 8.771a1.998 1.998 0 0 1 0 3.859C21.619 18.918 17.251 22.7 12 22.7 6.09 22.7 1.3 17.91 1.3 12S6.09 1.3 12 1.3m0 1.4a9.3 9.3 0 0 0 0 18.6c4.52 0 8.288-3.226 9.126-7.501a1.998 1.998 0 0 1 0-3.598C20.287 5.926 16.52 2.7 12 2.7m0 7.3a2 2 0 1 1 0 4 2 2 0 0 1 0-4" })))
        } />;
      }

      export default KlineCircleOutlined;