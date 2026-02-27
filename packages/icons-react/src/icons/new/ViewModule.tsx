// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const ViewModule = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M42.688 128h938.688v768H42.688zM128 213.312v256h199.104v-256h-199.04zm284.48 0v256h199.04v-256zm284.416 0v256H896v-256H696.96zM896 554.688H696.96v256H896zm-284.416 256v-256H412.48v256h199.04zm-284.48 0v-256h-199.04v256z" })))
        } />;
      }

      export default ViewModule;