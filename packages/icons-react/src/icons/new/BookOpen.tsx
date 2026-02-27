// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const BookOpen = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M42.688 85.312H384c51.008 0 96.768 22.4 128 57.792a170.24 170.24 0 0 1 128-57.792h341.376V896h-42.688c-125.632 0-219.264 10.496-280.96 20.736-30.912 5.12-53.76 10.24-68.672 14.016a429 429 0 0 0-20.16 5.504l-.704.192h-.128l-6.4 2.24h-99.2l-6.528-2.176h-.064l-.768-.256a429 429 0 0 0-20.096-5.504c-14.912-3.776-37.76-8.896-68.672-14.016C304.64 906.496 210.944 896 85.376 896H42.688zM128 170.688v640.384c109.44 2.048 193.536 11.712 252.352 21.504a972 972 0 0 1 88.96 18.944V256c0-47.104-38.144-85.312-85.312-85.312zM554.688 256v595.52l13.632-3.584c17.088-4.288 42.24-9.856 75.328-15.36 58.88-9.792 142.976-19.456 252.352-21.504V170.688H640c-47.104 0-85.312 38.208-85.312 85.312M640 341.312h170.688v85.376H640zm0 128h170.688v85.376H640z" })))
        } />;
      }

      export default BookOpen;