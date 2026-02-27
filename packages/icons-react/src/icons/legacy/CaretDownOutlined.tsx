// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const CaretDownOutlined = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M13.698 3c.272 0 .538.08.759.231.584.398.718 1.169.299 1.723l-5.698 7.531a1.3 1.3 0 0 1-.3.284c-.583.397-1.397.27-1.816-.284L1.244 4.954A1.2 1.2 0 0 1 1 4.234C1 3.553 1.583 3 2.302 3z" })))
        } />;
      }

      export default CaretDownOutlined;