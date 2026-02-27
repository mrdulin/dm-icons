// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const SystemLocationFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M981.376 85.312H42.688V768h458.688v-53.312c0-41.856 8.896-81.6 24.96-117.44H128V170.56h768v276.48a288 288 0 0 1 85.376 52.928zM128 853.312h373.376v85.376H128zM789.376 1011.2l-23.68-15.68-.128-.064-.128-.128-.512-.384-1.728-1.152a483 483 0 0 1-25.728-19.456 547.5 547.5 0 0 1-59.648-56.256c-42.496-46.72-91.136-118.016-91.136-203.392a202.688 202.688 0 0 1 405.312 0c0 85.376-48.64 156.736-91.072 203.392a548 548 0 0 1-85.44 75.712l-1.664 1.152-.512.384-.192.128h-.064l-23.68 15.808zm53.312-328.512H736V768h106.688z" })))
        } />;
      }

      export default SystemLocationFilled;