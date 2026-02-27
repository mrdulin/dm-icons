// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Transform3 = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M341.376 106.688V256h366.272l145.728-145.664 60.352 60.352L768 316.288V682.56h149.376V768H768v149.312h-85.312V768H256V341.312H106.688V256H256V106.688zm0 234.624v280.96l280.96-280.96zm341.312 60.352-280.96 280.96h280.96z" })))
        } />;
      }

      export default Transform3;