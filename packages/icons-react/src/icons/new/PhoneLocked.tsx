// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const PhoneLocked = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M170.688 42.688h682.688v426.624H768V128H256v768h213.376v85.312H170.688zm576 576C776.128 618.688 800 642.56 800 672v32H693.376v-32c0-29.44 23.872-53.312 53.312-53.312M885.376 704v-32A138.688 138.688 0 0 0 608 672v32h-53.376v277.312h384V704zm-32.064 85.312V896H639.936V789.312z" })))
        } />;
      }

      export default PhoneLocked;