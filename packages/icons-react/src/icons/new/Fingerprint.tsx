// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Fingerprint = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M85.312 469.312a426.688 426.688 0 1 1 853.312 0v128c0 112.64-24.32 219.776-67.904 316.288l-17.6 38.848-77.76-35.2 17.6-38.848c38.72-85.632 60.352-180.8 60.352-281.088v-128a341.312 341.312 0 1 0-682.688 0v128H85.312zm192 0a234.688 234.688 0 0 1 469.312 0v128a573.57 573.57 0 0 1-98.752 322.56L624 955.264l-70.656-47.872 23.872-35.328a488.2 488.2 0 0 0 84.096-274.752v-128a149.312 149.312 0 1 0-298.688 0v128a192 192 0 0 1-192 192H85.312V704h85.312c58.88 0 106.688-47.744 106.688-106.688zm277.312-42.624v170.624c0 144.64-80 270.528-197.888 336l-37.312 20.672-41.408-74.56 37.312-20.736a298.56 298.56 0 0 0 153.984-261.376V426.688z" })))
        } />;
      }

      export default Fingerprint;