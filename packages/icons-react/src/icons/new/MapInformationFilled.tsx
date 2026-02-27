// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const MapInformationFilled = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M487.808 589.824 512 606.464l24.192-16.64.064-.064.192-.128.512-.32 1.728-1.28 6.144-4.48a622 622 0 0 0 83.968-76.16c44.544-48.64 96.512-122.88 96.512-208.704a213.312 213.312 0 1 0-426.688 0c0 85.824 51.968 160 96.512 208.768a622 622 0 0 0 90.112 80.64l1.728 1.152.576.384.128.128h.128zM512 362.624a64 64 0 1 1 0-128 64 64 0 0 1 0 128m-213.376 64.064H85.312v512h853.312v-512H725.312V512h67.648L596.544 708.48l-37.888-43.328-64.192 56.192L609.92 853.376H224.96l197.952-216-62.912-57.6-189.376 206.528V512h128zM652.864 772.8l200.448-200.448v280.96h-129.92L652.8 772.864z" })))
        } />;
      }

      export default MapInformationFilled;