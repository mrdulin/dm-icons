// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Share1 = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M490.688 78.976 1004.928 512l-514.24 433.024v-265.6c-178.944 8.512-301.76 72.512-391.936 198.72l-76.544-33.152c22.336-111.68 67.456-225.92 148.352-318.4 75.2-85.952 179.648-151.168 320.128-178.624zM576 262.4v158.592l-36.608 5.248c-139.52 19.904-236.8 79.04-304.64 156.544a511 511 0 0 0-74.432 113.408c99.84-70.4 222.784-103.104 373.056-103.104H576V761.6L872.448 512z" })))
        } />;
      }

      export default Share1;