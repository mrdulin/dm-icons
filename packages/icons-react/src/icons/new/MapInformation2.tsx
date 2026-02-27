// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const MapInformation2 = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M512 170.688a128 128 0 0 0-128 128c0 52.8 33.344 106.56 74.112 151.168 19.456 21.312 39.04 38.784 53.888 51.008a536 536 0 0 0 53.824-51.008C606.592 405.248 640 351.488 640 298.688a128 128 0 0 0-128-128m0 435.776-24.192-16.64-.128-.064-.128-.128-.512-.384-1.792-1.216a561 561 0 0 1-27.072-20.928 622 622 0 0 1-63.04-59.648c-44.544-48.704-96.512-122.88-96.512-208.768a213.312 213.312 0 0 1 426.688 0c0 85.824-51.968 160-96.512 208.768a622 622 0 0 1-90.112 80.64l-1.728 1.152-.512.384-.192.128-24.32 16.64zm0-297.152A10.688 10.688 0 1 0 512 288a10.688 10.688 0 0 0 0 21.312m-74.688-10.624a74.688 74.688 0 1 1 149.312 0 74.688 74.688 0 0 1-149.312 0m-304.832 128h166.144V512h-89.792L175.68 810.688h672.64L815.104 512h-89.792v-85.312H891.52L943.68 896H80.32z" })))
        } />;
      }

      export default MapInformation2;