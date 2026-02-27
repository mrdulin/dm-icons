// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const ImageOff = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "m999.04 85.312-60.352 60.352v792.96h-792.96L85.312 999.04l-60.288-60.352L938.688 24.96l60.352 60.288zm-768 768h519.296L490.688 593.664zm320-320 302.272 302.336V231.04l-55.104 55.104A128 128 0 0 1 627.52 456.832zM756.672 85.248l-101.12 85.504-484.8-.064v510.4l-85.504 72.32.192-668.096 554.496.128m116.736-.192L640 85.312zM640 85.312l-92.544.128z" })))
        } />;
      }

      export default ImageOff;