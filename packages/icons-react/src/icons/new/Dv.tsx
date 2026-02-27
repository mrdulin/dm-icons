// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Dv = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M85.376 85.312H512v285.12c19.456 29.312 33.088 62.848 39.168 98.88h46.208V298.688h341.312v426.624H597.376V554.688h-46.208A254.7 254.7 0 0 1 512 653.568v285.12H85.376v-285.12A254.98 254.98 0 0 1 42.688 512c0-52.288 15.744-100.992 42.688-141.568zm85.312 204.928a254.85 254.85 0 0 1 128-34.24c46.656 0 90.368 12.48 128 34.24V170.688h-256zm0 443.52v119.552h256V733.76a254.85 254.85 0 0 1-128 34.24 254.85 254.85 0 0 1-128-34.24m128-392.448A170.37 170.37 0 0 0 128 512a170.304 170.304 0 0 0 170.688 170.688A170.304 170.304 0 0 0 469.376 512a170.37 170.37 0 0 0-170.688-170.688m384 42.688v256h170.688V384z" })))
        } />;
      }

      export default Dv;