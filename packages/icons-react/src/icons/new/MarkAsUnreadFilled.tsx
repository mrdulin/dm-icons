// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const MarkAsUnreadFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M405.312 57.152 0 295.68v557.696h85.312V344.384l320-188.16L692.48 325.056l43.264-73.536zm-234.624 924.16V487.168L576 732.544 981.312 487.36v493.952zM981.312 384v3.648L576 632.768 170.688 387.392V384z" })))
        } />;
      }

      export default MarkAsUnreadFilled;