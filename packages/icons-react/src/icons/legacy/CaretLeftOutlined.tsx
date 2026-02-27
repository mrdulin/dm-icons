// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const CaretLeftOutlined = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M12.6 13.426a1.1 1.1 0 0 1-.323.754 1.073 1.073 0 0 1-1.528 0L4.725 9.257c-.967-.774-.967-1.903 0-2.567l6.024-4.87a1.073 1.073 0 0 1 1.528 0c.214.215.319.514.316.797-.002.276.01 10.524.006 10.81" })))
        } />;
      }

      export default CaretLeftOutlined;