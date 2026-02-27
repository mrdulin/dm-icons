// GENERATE BY ./scripts/generate.ts
    // DON NOT EDIT IT MANUALLY

      import React from 'react';
      import { DMIcon, DMIconProps } from '../../dm-icon';

      const Tools = (props: Omit<DMIconProps, 'icon'>) => {
        return <DMIcon {...props} icon={
          // @ts-expect-error TODO improve TS type
          ({ title, titleId, ...props }) => (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", className: "icon", viewBox: "0 0 1024 1024", fill: "currentColor", "aria-hidden": "true", focusable: "false", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M278.784 79.616a362.752 362.752 0 0 1 490.112 417.792L988.8 717.312l-60.352 60.352L672.96 522.176l7.616-24.576c29.312-95.232 6.336-202.88-68.928-278.08a277.12 277.12 0 0 0-255.808-74.88l180.48 180.48-211.2 211.2-180.48-180.48a277.12 277.12 0 0 0 74.88 255.936 277.25 277.25 0 0 0 278.144 68.864l24.512-7.552 255.488 255.488-60.352 60.352-219.84-219.904A362.752 362.752 0 0 1 79.616 278.912l10.88-26.624h71.296L325.12 415.68l90.432-90.56-163.328-163.328-.064-71.36 26.624-10.88zM672 611.712l211.2 211.2-60.352 60.352-211.2-211.2z" })))
        } />;
      }

      export default Tools;