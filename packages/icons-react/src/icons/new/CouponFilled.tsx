// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const CouponFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M128 896h768V48.256L727.68 160.512 618.688 73.344 512 158.72 405.312 73.344l-108.928 87.168L128 48.256zm597.312-384h-256v-85.312h256zM298.688 682.688v-85.376h426.624v85.376zm85.504-256v85.504h-85.504v-85.504z" })))
        } />;
      }

      export default CouponFilled;