// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const PhoneLockedFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M853.376 42.688H170.688v938.624h320v-256H256V128h512v342.208c30.272 2.56 59.008 10.24 85.376 22.4V42.624zM885.312 672v32h53.312v277.312h-384V704H608v-32a138.688 138.688 0 0 1 277.312 0M800 672a53.312 53.312 0 1 0-106.688 0v32H800z" })))
        } />;
      }

      export default PhoneLockedFilled;