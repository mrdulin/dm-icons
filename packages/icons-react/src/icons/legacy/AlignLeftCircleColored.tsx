// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const AlignLeftCircleColored = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("circle", { cx: 12, cy: 12, r: 12, fill: "#37465c" }),
    React.createElement("path", { fill: "#8aaee6", d: "M7.714 6H12a.857.857 0 0 1 0 1.714H7.714a.857.857 0 1 1 0-1.714m0 3.429h8.572a.857.857 0 0 1 0 1.714H7.714a.857.857 0 1 1 0-1.714m0 3.428h6.857a.857.857 0 1 1 0 1.714H7.714a.857.857 0 0 1 0-1.714m0 3.429h8.572a.857.857 0 1 1 0 1.714H7.714a.857.857 0 1 1 0-1.714" })))
        } />;
      }

      export default AlignLeftCircleColored;