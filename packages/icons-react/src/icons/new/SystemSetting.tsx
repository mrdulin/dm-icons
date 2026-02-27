// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const SystemSetting = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M42.688 85.312h938.688v352H896V170.688H128v512h362.688V768h-448zm85.312 768h362.688v85.376H128zM832 512v58.688c30.528 7.872 57.728 23.936 79.104 45.76l50.88-29.44 42.688 73.92-50.816 29.376a170.9 170.9 0 0 1 0 91.392l50.816 29.376-42.688 73.856-50.88-29.376c-21.376 21.76-48.64 37.888-79.104 45.76V960h-85.312v-58.688a170.5 170.5 0 0 1-79.104-45.76l-50.88 29.44-42.688-73.92 50.88-29.44a170.8 170.8 0 0 1 0-91.328l-50.88-29.376 42.688-73.856 50.88 29.376c21.376-21.76 48.64-37.888 79.104-45.76V512zM714.624 694.72a84.93 84.93 0 0 0 0 82.56l1.536 2.688a85.248 85.248 0 0 0 146.368 0l1.536-2.752a84.93 84.93 0 0 0 0-82.496l-1.536-2.688a85.312 85.312 0 0 0-146.368 0z" })))
        } />;
      }

      export default SystemSetting;