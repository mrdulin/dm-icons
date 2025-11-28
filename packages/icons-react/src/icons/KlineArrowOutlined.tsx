// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../dm-icon';

      const KlineArrowOutlined = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { viewBox: "0 0 22 22", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M17.064 7.034 18 3.586l-3.492.924.846.835L6.02 14.56a1.6 1.6 0 0 0-.454-.067C4.7 14.494 4 15.186 4 16.04s.7 1.546 1.566 1.546c.864 0 1.565-.692 1.565-1.546 0-.318-.097-.613-.264-.859l9.225-9.107z" })))
        } />;
      }

      export default KlineArrowOutlined;